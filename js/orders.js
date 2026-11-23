/* Заказы: сначала сохраняем локально, потом пробуем отправить на сервер.
   Сбой сети НИКОГДА не ломает оформление: заказ помечается sent:false и отправляется повторно при следующем визите. */
(function(S){
  var KEY = "ssm_orders_v1";

  function read(){
    try{ var a = JSON.parse(localStorage.getItem(KEY) || "[]"); return Array.isArray(a) ? a : []; }
    catch(e){ return []; }
  }
  function write(list){
    try{ localStorage.setItem(KEY, JSON.stringify(list.slice(0,50))); }catch(e){}
  }
  function makeNumber(){
    var chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789", out = "";
    var buf = new Uint8Array(6);
    (window.crypto || window.msCrypto).getRandomValues(buf);
    for(var i=0;i<6;i++) out += chars[buf[i] % chars.length];
    return "SSM-" + out;
  }
  function post(payload){
    var url = S.config.ORDER_ENDPOINT;
    if(!url) return Promise.resolve(false);
    var ctrl = ("AbortController" in window) ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function(){ ctrl.abort(); }, 10000) : null;
    return fetch(url, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(payload),
      signal: ctrl ? ctrl.signal : undefined
    }).then(function(r){ return r.ok; })
      .catch(function(){ return false; })
      .then(function(ok){ if(timer) clearTimeout(timer); return ok; });
  }
  function markSent(number){
    var list = read();
    list.forEach(function(o){ if(o.number===number) o.sent = true; });
    write(list);
  }

  S.orders = {
    all: read,
    find: function(number, phoneDigits){
      return read().filter(function(o){
        return o.number===number && o.phone.replace(/\D/g,"").slice(-10)===phoneDigits;
      })[0];
    },
    create: function(data){
      var t = S.cart.totals(data.delivery);
      var order = {
        type:"order", number:makeNumber(), createdAt:new Date().toISOString(), status:"new", sent:false,
        name:data.name, phone:data.phone, email:data.email,
        delivery:data.delivery,
        address: data.delivery==="pickup" ? S.config.PICKUP_ADDRESS : data.address,
        payment:data.payment, comment:data.comment,
        items:t.lines.map(function(l){ return {name:l.product.name, qty:l.qty, unit:l.product.unit, price:l.product.price}; }),
        subtotal:t.subtotal, fee:t.fee, total:t.total
      };
      var list = read(); list.unshift(order); write(list);
      S.cart.clear();
      post(order).then(function(ok){ if(ok) markSent(order.number); });
      return order;
    },
    lead: function(data){
      var lead = {type:"lead", name:data.name, phone:data.phone, email:data.email, message:data.message};
      return post(lead);
    },
    retryPending: function(){
      read().filter(function(o){ return !o.sent; }).slice(0,5).forEach(function(o){
        post(o).then(function(ok){ if(ok) markSent(o.number); });
      });
    }
  };
})(window.SSM);
