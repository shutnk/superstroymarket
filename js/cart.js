/* Утилиты + корзина. Корзина хранит только {id, qty}; цены всегда берутся из каталога. */
(function(S){
  var CART_KEY = "ssm_cart_v1";

  S.esc = function(s){
    return String(s == null ? "" : s).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  };
  S.money = function(n){ return new Intl.NumberFormat("ru-RU").format(Math.round(n)) + " ₽"; };
  S.plural = function(n,a,b,c){
    var m10=n%10, m100=n%100;
    if(m10===1&&m100!==11) return a;
    if(m10>=2&&m10<=4&&(m100<10||m100>=20)) return b;
    return c;
  };
  S.findProduct = function(slug){ return S.PRODUCTS.filter(function(p){return p.slug===slug;})[0]; };
  S.productById = function(id){ return S.PRODUCTS.filter(function(p){return p.id===id;})[0]; };
  S.catTitle = function(slug){ var c=S.CATEGORIES.filter(function(x){return x.slug===slug;})[0]; return c?c.title:"Каталог"; };

  function read(){
    try{
      var arr = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
      if(!Array.isArray(arr)) return [];
      return arr.filter(function(i){
        return i && typeof i.id==="string" && S.productById(i.id) && Number.isInteger(i.qty) && i.qty>0;
      }).map(function(i){ return {id:i.id, qty:Math.min(i.qty,9999)}; });
    }catch(e){ return []; }
  }
  function write(items){
    try{ localStorage.setItem(CART_KEY, JSON.stringify(items)); }catch(e){}
    S.cart.updateBadge();
  }

  S.cart = {
    items: read,
    has: function(id){ return read().some(function(i){return i.id===id;}); },
    add: function(id, qty){
      qty = Math.max(1, Math.min(999, parseInt(qty,10) || 1));
      var items = read(), line = items.filter(function(i){return i.id===id;})[0];
      if(line) line.qty = Math.min(9999, line.qty + qty); else items.push({id:id, qty:qty});
      write(items);
    },
    setQty: function(id, qty){
      write(read().map(function(i){ return i.id===id ? {id:id, qty:qty} : i; }).filter(function(i){return i.qty>0;}));
    },
    remove: function(id){ write(read().filter(function(i){return i.id!==id;})); },
    clear: function(){ write([]); },
    count: function(){ return read().reduce(function(s,i){return s+i.qty;},0); },
    totals: function(delivery){
      var lines = read().map(function(i){
        var p = S.productById(i.id);
        return {product:p, qty:i.qty, total:p.price*i.qty};
      });
      var subtotal = lines.reduce(function(s,l){return s+l.total;},0);
      var fee = (delivery!=="pickup" && subtotal>0 && subtotal<S.config.FREE_DELIVERY_FROM) ? S.config.DELIVERY_FEE : 0;
      return {lines:lines, subtotal:subtotal, fee:fee, total:subtotal+fee,
              count:lines.reduce(function(s,l){return s+l.qty;},0)};
    },
    updateBadge: function(){
      var b = document.getElementById("cartBadge"); if(!b) return;
      var n = S.cart.count(); b.textContent = n; b.classList.toggle("show", n>0);
    }
  };
})(window.SSM);
