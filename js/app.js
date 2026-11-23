/* Представления и роутер (hash-маршруты: работают на GitHub Pages без настройки сервера). */
(function(S){
  var esc = S.esc, money = S.money, cfg = S.config;
  var $ = function(id){ return document.getElementById(id); };
  var catalogState = {cat:"all", q:"", sort:"popular"};

  function toast(msg){
    var el = $("toast"); el.textContent = msg; el.classList.add("show");
    clearTimeout(el._t); el._t = setTimeout(function(){ el.classList.remove("show"); }, 2400);
  }
  function img(src, alt, extra){
    return '<img src="'+esc(src)+'" alt="'+esc(alt)+'" '+(extra||"")+' onerror="this.style.visibility=\'hidden\'">';
  }
  function formatDate(iso){
    var d = new Date(iso); if(isNaN(d)) return "";
    return d.toLocaleString("ru-RU",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});
  }

  /* ---------- общие блоки ---------- */
  function productCard(p){
    var inCart = S.cart.has(p.id);
    return '<article class="pcard">'+
      '<a class="pcard-img" href="#/product/'+p.slug+'">'+img(p.image,p.name,'loading="lazy"')+'</a>'+
      '<div class="pcard-body"><span class="pcard-cat">'+esc(S.catTitle(p.cat))+'</span>'+
      '<h3><a href="#/product/'+p.slug+'">'+esc(p.name)+'</a></h3>'+
      '<p class="short">'+esc(p.short)+'</p>'+
      '<div class="pcard-foot"><div class="price">'+money(p.price)+'<small>за '+esc(p.unit)+'</small></div>'+
      '<button class="add-btn'+(inCart?' in':'')+'" data-add="'+p.id+'" aria-label="В корзину">'+(inCart?'✓':'+')+'</button></div>'+
      '</div></article>';
  }
  function cta(){
    return '<div class="wrap"><section class="cta"><div><h2>Нужен расчёт по вашему объекту?</h2>'+
      '<p>Пришлите список материалов — подготовим смету и проверим наличие на складе в течение часа.</p></div>'+
      '<div class="cta-actions"><a class="btn btn-accent" href="#/contacts">Запросить смету</a>'+
      '<a class="btn btn-light" href="tel:'+cfg.PHONE_HREF+'">'+esc(cfg.PHONE)+'</a></div></section></div>';
  }
  function notFound(){
    return '<div class="wrap"><div class="empty" style="margin:64px 0"><h3>Страница не найдена</h3>'+
      '<p>Возможно, товар снят с продажи или ссылка устарела.</p><a class="btn btn-accent" href="#/catalog">В каталог</a></div></div>';
  }

  /* ---------- страницы ---------- */
  function viewHome(){
    var popular = S.PRODUCTS.filter(function(p){return p.popular;}).slice(0,8);
    return '<section class="hero"><div class="wrap hero-grid"><div>'+
      '<span class="eyebrow">Свой склад 15 000 м² · доставка от 1 дня</span>'+
      '<h1>Стройматериалы<br>с доставкой <span class="accent">по России</span></h1>'+
      '<p class="lead">Кирпич, цемент, инструмент и отделка от проверенных производителей. Работаем с частными мастерами и строительными компаниями с 2005 года.</p>'+
      '<div class="hero-actions"><a class="btn btn-accent" href="#/catalog">Перейти в каталог</a>'+
      '<a class="btn btn-outline" href="#/contacts">Получить консультацию</a></div>'+
      '<ul class="hero-points"><li>Сертификаты ГОСТ</li><li>Доставка от 1 дня</li><li>Скидки от объёма</li></ul></div>'+
      '<div class="hero-media">'+img(S.HERO_IMG,"Склад строительных материалов")+
      '<div class="hero-badge">🏗 20 лет на рынке<br>5 000+ постоянных клиентов</div></div></div></section>'+

      '<section class="section"><div class="wrap"><div class="section-head"><div><h2>Почему выбирают нас</h2><p>Склад, логистика и документы — всё в одном месте</p></div></div>'+
      '<div class="adv-grid">'+S.ADVANTAGES.map(function(a){
        return '<div class="adv"><div class="ico">'+a.icon+'</div><h3>'+esc(a.title)+'</h3><p>'+esc(a.text)+'</p></div>';
      }).join("")+'</div></div></section>'+

      '<section class="section" style="padding-top:0"><div class="wrap"><div class="section-head"><div><h2>Категории товаров</h2><p>Всё для стройки — от фундамента до отделки</p></div>'+
      '<a class="btn btn-outline btn-sm" href="#/catalog">Все товары →</a></div><div class="cat-grid">'+
      S.CATEGORIES.map(function(c){
        return '<a class="cat" href="#/catalog?category='+c.slug+'">'+img(c.image,c.title,'loading="lazy"')+
          '<div class="cat-body"><h3>'+esc(c.title)+'</h3><p>'+esc(c.note)+'</p></div></a>';
      }).join("")+'</div></div></section>'+

      '<section class="section" style="padding-top:0"><div class="wrap"><div class="section-head"><div><h2>Хиты продаж</h2><p>Позиции, которые чаще всего заказывают</p></div>'+
      '<a class="btn btn-outline btn-sm" href="#/catalog">Весь каталог →</a></div><div class="prod-grid">'+popular.map(productCard).join("")+'</div></div></section>'+

      '<section class="section" style="padding-top:0"><div class="wrap"><div class="section-head"><div><h2>Отзывы клиентов</h2><p>Нам доверяют подрядчики и частные мастера</p></div></div><div class="rev-grid">'+
      S.REVIEWS.map(function(r){
        return '<div class="rev"><div class="stars">'+"★★★★★".slice(0,r.rating)+'</div><p>'+esc(r.text)+'</p><div class="rev-by">'+esc(r.name)+'<small>'+esc(r.company)+'</small></div></div>';
      }).join("")+'</div></div></section>'+cta();
  }

  function viewCatalog(params){
    var cat = params.get("category") || "all";
    if(cat!=="all" && !S.CATEGORIES.some(function(c){return c.slug===cat;})) cat = "all";
    var q = params.get("q") || "", sort = params.get("sort") || "popular";
    var sorts = [["popular","Сначала популярные"],["price-asc","Цена: по возрастанию"],["price-desc","Цена: по убыванию"],["name","По названию"]];
    return '<section class="page-head"><div class="wrap"><span class="eyebrow">Каталог</span><h1>Строительные материалы</h1>'+
      '<p>Цены указаны для розницы, для опта действуют скидки. Наличие уточняйте у менеджера.</p></div></section>'+
      '<section class="section"><div class="wrap"><div class="toolbar">'+
      '<div class="search"><span>🔍</span><input id="searchInput" type="search" placeholder="Поиск: кирпич, цемент, краска…" value="'+esc(q)+'"></div>'+
      '<select class="select" id="sortSelect">'+sorts.map(function(s){
        return '<option value="'+s[0]+'"'+(sort===s[0]?' selected':'')+'>'+s[1]+'</option>';
      }).join("")+'</select></div>'+
      '<div class="chips" id="chips"><button class="chip'+(cat==="all"?' active':'')+'" data-cat="all">Все товары</button>'+
      S.CATEGORIES.map(function(c){
        return '<button class="chip'+(cat===c.slug?' active':'')+'" data-cat="'+c.slug+'">'+esc(c.title)+'</button>';
      }).join("")+'</div><div class="result-count" id="resultCount"></div><div id="catalogGrid"></div></div></section>';
  }
  function filterProducts(st){
    var list = S.PRODUCTS.slice();
    if(st.cat!=="all") list = list.filter(function(p){return p.cat===st.cat;});
    var term = st.q.trim().toLowerCase();
    if(term) list = list.filter(function(p){ return (p.name+" "+p.short).toLowerCase().indexOf(term)>-1; });
    if(st.sort==="price-asc") list.sort(function(a,b){return a.price-b.price;});
    else if(st.sort==="price-desc") list.sort(function(a,b){return b.price-a.price;});
    else if(st.sort==="name") list.sort(function(a,b){return a.name.localeCompare(b.name,"ru");});
    else list.sort(function(a,b){return (b.popular?1:0)-(a.popular?1:0);});
    return list;
  }
  function renderGrid(){
    var list = filterProducts(catalogState), grid = $("catalogGrid"); if(!grid) return;
    $("resultCount").textContent = list.length+" "+S.plural(list.length,"товар","товара","товаров");
    grid.innerHTML = list.length ? '<div class="prod-grid">'+list.map(productCard).join("")+'</div>' :
      '<div class="empty"><h3>Ничего не найдено</h3><p>Измените запрос или выберите другую категорию.</p><button class="btn btn-dark btn-sm" id="resetFilters">Сбросить фильтры</button></div>';
    var r = $("resetFilters");
    if(r) r.onclick = function(){ location.hash = "#/catalog"; render(); };
  }

  function viewProduct(slug){
    var p = S.findProduct(slug); if(!p) return notFound();
    var related = S.PRODUCTS.filter(function(x){return x.cat===p.cat && x.id!==p.id;}).slice(0,4);
    return '<div class="wrap"><div class="crumbs"><a href="#/">Главная</a> / <a href="#/catalog">Каталог</a> / <a href="#/catalog?category='+p.cat+'">'+esc(S.catTitle(p.cat))+'</a></div>'+
      '<div class="pd"><div class="pd-img">'+img(p.image,p.name)+'</div><div>'+
      '<span class="eyebrow">'+esc(S.catTitle(p.cat))+'</span><h1>'+esc(p.name)+'</h1><p class="muted" style="margin:0">'+esc(p.short)+'</p>'+
      '<div class="buy-box"><div class="buy-row"><div class="buy-price">'+money(p.price)+'</div><span class="muted">за '+esc(p.unit)+'</span>'+
      '<div class="buy-actions"><div class="qty"><button type="button" data-pq="-1">−</button><span id="pdQty">1</span><button type="button" data-pq="1">+</button></div>'+
      '<button class="btn btn-accent" id="pdAdd">В корзину</button></div></div>'+
      '<div class="buy-meta"><span>🚚 Доставка от 1 дня</span><span>📄 Сертификаты ГОСТ</span><span>☎ Наличие уточнит менеджер</span></div></div>'+
      '<p class="desc">'+esc(p.desc)+'</p><div class="specs"><h3>Характеристики</h3><ul>'+p.specs.map(function(s){return '<li>'+esc(s)+'</li>';}).join("")+'</ul></div></div></div>'+
      (related.length?'<section class="section" style="padding-top:0"><div class="section-head"><h2>Похожие товары</h2></div><div class="prod-grid">'+related.map(productCard).join("")+'</div></section>':'')+'</div>';
  }

  function viewCart(){
    var t = S.cart.totals("delivery");
    if(!t.lines.length) return '<div class="wrap"><div class="empty" style="margin:56px 0"><h3>Корзина пуста</h3><p>Добавьте материалы из каталога.</p><a class="btn btn-accent" href="#/catalog">Перейти в каталог</a></div></div>';
    var rows = t.lines.map(function(l){
      var p = l.product;
      return '<div class="cart-item">'+img(p.image,p.name)+
        '<div><h3><a href="#/product/'+p.slug+'">'+esc(p.name)+'</a></h3><div class="unit">'+money(p.price)+' / '+esc(p.unit)+'</div>'+
        '<div class="qty" style="margin-top:8px"><button data-cq="'+p.id+'" data-d="-1">−</button><span>'+l.qty+'</span><button data-cq="'+p.id+'" data-d="1">+</button></div></div>'+
        '<div class="cart-right"><div class="price">'+money(l.total)+'</div><button class="link-danger" data-remove="'+p.id+'">Удалить</button></div></div>';
    }).join("");
    var left = cfg.FREE_DELIVERY_FROM - t.subtotal;
    return '<div class="wrap"><div class="page-head plain"><h1>Корзина</h1></div><div class="cart-grid"><div>'+rows+
      '<a class="btn btn-outline btn-sm" href="#/catalog">← Продолжить покупки</a></div><div class="summary"><h3>Ваш заказ</h3>'+
      '<div class="sum-row"><span>Товары ('+t.count+')</span><b>'+money(t.subtotal)+'</b></div>'+
      '<div class="sum-row"><span>Доставка</span><b>'+(t.fee?money(t.fee):"бесплатно")+'</b></div>'+
      '<div class="sum-total"><span>Итого</span><b>'+money(t.total)+'</b></div>'+
      '<p class="hint">'+(left>0?'До бесплатной доставки по Москве не хватает '+money(left)+'.':'Доставка по Москве бесплатно.')+'</p>'+
      '<a class="btn btn-accent btn-block" style="margin-top:16px" href="#/checkout">Оформить заказ</a></div></div></div>';
  }

  function radio(name,val,title,sub,checked){
    return '<label class="radio-card'+(checked?' checked':'')+'"><input type="radio" name="'+name+'" value="'+val+'"'+(checked?' checked':'')+'><span><b>'+title+'</b><small>'+sub+'</small></span></label>';
  }
  function viewCheckout(){
    var t = S.cart.totals("delivery");
    if(!t.lines.length) return '<div class="wrap"><div class="empty" style="margin:56px 0"><h3>Корзина пуста</h3><p>Сначала выберите материалы.</p><a class="btn btn-accent" href="#/catalog">В каталог</a></div></div>';
    return '<div class="wrap"><div class="page-head plain"><h1>Оформление заказа</h1></div><div class="cart-grid">'+
      '<form class="panel" id="checkoutForm" novalidate><h2>Контактные данные</h2><div class="form-grid">'+
      '<div><label class="label">Имя *</label><input class="field" name="name" autocomplete="name"><div class="err-msg" data-err="name"></div></div>'+
      '<div class="form-grid two"><div><label class="label">Телефон *</label><input class="field" name="phone" inputmode="tel" autocomplete="tel" placeholder="+7 (___) ___-__-__"><div class="err-msg" data-err="phone"></div></div>'+
      '<div><label class="label">Email *</label><input class="field" name="email" inputmode="email" autocomplete="email"><div class="err-msg" data-err="email"></div></div></div></div>'+
      '<h2 class="next">Доставка</h2><div class="form-grid">'+
      radio("delivery","delivery","Доставка на объект",t.subtotal>=cfg.FREE_DELIVERY_FROM?"Бесплатно":money(cfg.DELIVERY_FEE)+" по Москве",true)+
      radio("delivery","pickup","Самовывоз со склада",esc(cfg.PICKUP_ADDRESS)+" · бесплатно",false)+
      '<div id="addressWrap"><label class="label">Адрес доставки *</label><input class="field" name="address" autocomplete="street-address" placeholder="Город, улица, дом, квартира"><div class="err-msg" data-err="address"></div></div></div>'+
      '<h2 class="next">Оплата</h2><div class="form-grid">'+
      radio("payment","cash","Наличными при получении","Курьеру или на складе",true)+
      radio("payment","card","Картой","Ссылка на оплату после подтверждения",false)+
      radio("payment","invoice","По счёту для юрлиц","Счёт и закрывающие документы",false)+'</div>'+
      '<div style="margin-top:22px"><label class="label">Комментарий</label><textarea class="field" name="comment" placeholder="Удобное время доставки, пожелания"></textarea></div>'+
      '<input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">'+
      '<div class="alert alert-err" id="formError" style="display:none"></div>'+
      '<button class="btn btn-accent btn-block" type="submit" style="margin-top:18px">Подтвердить заказ</button>'+
      '<p class="hint" style="text-align:center">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p></form>'+
      '<div class="summary"><h3>Состав заказа</h3>'+
      t.lines.map(function(l){return '<div class="sum-row"><span>'+esc(l.product.name)+' × '+l.qty+'</span><b>'+money(l.total)+'</b></div>';}).join("")+
      '<div class="sum-row"><span>Доставка</span><b id="coFee">'+(t.fee?money(t.fee):"бесплатно")+'</b></div>'+
      '<div class="sum-total"><span>Итого</span><b id="coTotal">'+money(t.total)+'</b></div>'+
      '<p class="hint">Менеджер свяжется с вами в рабочее время для подтверждения.</p></div></div></div>';
  }
  function viewSuccess(o){
    return '<div class="wrap"><div class="success"><div class="success-ico">✓</div><h1>Заказ оформлен</h1>'+
      '<p class="muted">Менеджер свяжется с вами в рабочее время для подтверждения.</p><div class="order-no">'+esc(o.number)+'</div>'+
      '<div class="detail-box"><div class="sum-row"><span>Дата</span><b>'+esc(formatDate(o.createdAt))+'</b></div>'+
      '<div class="sum-row"><span>Получатель</span><b>'+esc(o.name)+', '+esc(o.phone)+'</b></div>'+
      '<div class="sum-row"><span>Доставка</span><b>'+esc(o.address)+'</b></div>'+
      '<div class="sum-row"><span>Состав</span><b>'+esc(o.items.map(function(i){return i.name+" × "+i.qty;}).join(", "))+'</b></div>'+
      '<div class="sum-total"><span>Итого</span><b>'+money(o.total)+'</b></div></div>'+
      '<div style="display:flex;gap:12px;justify-content:center;margin-top:22px;flex-wrap:wrap"><a class="btn btn-accent" href="#/track?number='+encodeURIComponent(o.number)+'">Статус заказа</a>'+
      '<a class="btn btn-outline" href="#/catalog">В каталог</a></div>'+
      '<p class="hint" style="margin-top:20px">Сохраните номер заказа. Если что-то пойдёт не так — назовите его менеджеру по телефону '+esc(cfg.PHONE)+'.</p></div></div>';
  }
  function viewTrack(params){
    return '<div class="wrap"><div class="page-head plain"><span class="eyebrow">Отслеживание</span><h1>Статус заказа</h1>'+
      '<p class="muted">Введите номер заказа и телефон. Пока статус виден только на том устройстве, где оформлен заказ.</p></div>'+
      '<div style="max-width:640px;margin-bottom:56px"><form class="panel" id="trackForm" novalidate><div class="form-grid">'+
      '<div><label class="label">Номер заказа *</label><input class="field" name="number" placeholder="SSM-XXXXXX" value="'+esc(params.get("number")||"")+'"><div class="err-msg" data-err="number"></div></div>'+
      '<div><label class="label">Телефон *</label><input class="field" name="phone" inputmode="tel"><div class="err-msg" data-err="phone"></div></div></div>'+
      '<div class="alert alert-err" id="trackError" style="display:none"></div>'+
      '<button class="btn btn-dark btn-block" type="submit" style="margin-top:16px">Проверить статус</button></form><div id="trackResult" style="margin-top:20px"></div></div></div>';
  }
  function trackResult(o){
    var st = S.STATUSES[o.status] || S.STATUSES.new;
    return '<div class="panel"><div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap"><div><div class="muted" style="font-size:12px">Заказ</div><b style="font-size:17px">'+esc(o.number)+'</b></div>'+
      '<span class="badge '+st.cls+'">'+st.label+'</span></div><div style="margin-top:16px">'+
      '<div class="sum-row"><span>Оформлен</span><b>'+esc(formatDate(o.createdAt))+'</b></div><div class="sum-row"><span>Получатель</span><b>'+esc(o.name)+'</b></div>'+
      '<div class="sum-row"><span>'+(o.delivery==="pickup"?"Самовывоз":"Адрес доставки")+'</span><b>'+esc(o.address)+'</b></div></div>'+
      '<div style="border-top:1px solid var(--line);padding-top:14px;margin-top:6px">'+
      o.items.map(function(i){return '<div class="sum-row"><span>'+esc(i.name)+' × '+i.qty+' '+esc(i.unit)+'</span><b>'+money(i.price*i.qty)+'</b></div>';}).join("")+
      '<div class="sum-total"><span>Итого</span><b>'+money(o.total)+'</b></div></div></div>';
  }

  function viewAbout(){
    var stats = [["20+","лет на рынке"],["5 000+","клиентов"],["15 000","позиций на складе"],["1 200","доставок в месяц"]];
    var vals = [["✅","Проверенные поставщики","Работаем с производителями напрямую и даём полный пакет документов на каждую партию."],
      ["📦","Склад 15 000 м²","Ходовые позиции всегда в наличии — отгружаем в день заказа."],
      ["🚚","Своя логистика","25 машин, такелажники и подъём на этаж. По Москве — от одного дня, по России — от трёх."],
      ["👤","Персональный менеджер","Один человек ведёт ваш объект: считает смету, следит за отгрузками и сроками."]];
    return '<section class="page-head"><div class="wrap"><span class="eyebrow">О компании</span><h1>Поставляем стройматериалы с 2005 года</h1>'+
      '<p>Начинали с одного склада в Москве, сегодня работаем с застройщиками, подрядчиками и частными мастерами по всей России.</p></div></section>'+
      '<section class="section"><div class="wrap two-col"><div class="media">'+img(S.ABOUT_IMG,"Складской комплекс")+'</div><div><h2 style="font-size:26px">Как мы работаем</h2>'+
      '<p class="muted">Заявка попадает к менеджеру, который проверяет наличие, считает доставку и присылает счёт. После оплаты груз комплектуется и уходит на объект — накладные и сертификаты едут вместе с материалами.</p>'+
      '<div class="stats-grid">'+stats.map(function(s){return '<div class="stat"><b>'+s[0]+'</b><span>'+s[1]+'</span></div>';}).join("")+'</div></div></div></section>'+
      '<section class="band"><div class="wrap"><h2 style="font-size:26px;margin-bottom:22px">Почему с нами удобно</h2><div class="values">'+
      vals.map(function(v){return '<div class="adv"><div class="ico">'+v[0]+'</div><h3>'+v[1]+'</h3><p>'+v[2]+'</p></div>';}).join("")+'</div></div></section>'+cta();
  }
  function viewServices(){
    return '<section class="page-head"><div class="wrap"><span class="eyebrow">Услуги</span><h1>Доставим, разгрузим и посчитаем</h1>'+
      '<p>Полный цикл: от расчёта сметы до подъёма материалов на этаж.</p></div></section>'+
      '<section class="section"><div class="wrap"><div class="svc-grid">'+S.SERVICES.map(function(s){
        return '<div class="svc"><div class="ico">'+s.icon+'</div><h3>'+esc(s.title)+'</h3><p>'+esc(s.text)+'</p><ul>'+s.features.map(function(f){return '<li>'+esc(f)+'</li>';}).join("")+'</ul></div>';
      }).join("")+'</div></div></section>'+
      '<section class="band"><div class="wrap"><h2 style="font-size:26px;margin-bottom:22px">Как проходит заказ</h2><div class="steps">'+
      S.STEPS.map(function(s,i){return '<div class="step"><b>0'+(i+1)+'</b><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div>';}).join("")+'</div></div></section>'+cta();
  }
  function viewContacts(){
    var items = [["📍","Склад и офис",["г. Москва, ул. Строительная, 15, стр. 3"]],
      ["📞","Телефоны",[cfg.PHONE+" — бесплатно по России","+7 495 123-45-67 — отдел опта"]],
      ["✉️","Почта",["info@superstroymarket.ru","opt@superstroymarket.ru — опт"]],
      ["🕗","Режим работы",["Пн–Пт: 8:00–20:00","Сб–Вс: 9:00–18:00"]]];
    return '<div class="wrap"><div class="page-head plain"><span class="eyebrow">Контакты</span><h1>Свяжитесь с нами</h1>'+
      '<p class="muted">Перезвоним в течение рабочего дня, посчитаем смету и подскажем, что есть на складе.</p></div><div class="contact-grid"><div>'+
      items.map(function(i){return '<div class="contact-item"><div class="ico">'+i[0]+'</div><div><h3>'+i[1]+'</h3>'+i[2].map(function(l){return '<p>'+esc(l)+'</p>';}).join("")+'</div></div>';}).join("")+
      '<div class="opt-card"><h3>Нужен опт или отсрочка платежа?</h3><p>Для строительных компаний — скидка за объём, отсрочка до 60 дней и персональный менеджер.</p><a class="btn btn-accent btn-sm" href="tel:+74951234567">📞 Отдел опта</a></div></div>'+
      '<div class="panel" id="leadWrap"><h2>Напишите нам</h2><form class="form-grid" id="leadForm" novalidate>'+
      '<div><input class="field" name="name" placeholder="Ваше имя *"><div class="err-msg" data-err="name"></div></div>'+
      '<div><input class="field" name="phone" inputmode="tel" placeholder="Телефон *"><div class="err-msg" data-err="phone"></div></div>'+
      '<input class="field" name="email" inputmode="email" placeholder="Email">'+
      '<textarea class="field" name="message" placeholder="Объект, объём, сроки"></textarea>'+
      '<input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">'+
      '<button class="btn btn-accent btn-block" type="submit">Отправить сообщение</button>'+
      '<p class="hint" style="text-align:center;margin:0">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p></form></div></div></div>';
  }

  /* ---------- формы ---------- */
  function setErr(form,name,msg){
    var inp = form.querySelector('[name="'+name+'"]'), slot = form.querySelector('[data-err="'+name+'"]');
    if(inp) inp.classList.toggle("err",!!msg); if(slot) slot.textContent = msg||"";
  }
  var digits = function(s){ return String(s||"").replace(/\D/g,""); };

  function submitCheckout(form){
    var d = new FormData(form);
    if(d.get("website")) return; // honeypot
    var v = {
      name:String(d.get("name")||"").trim(), phone:String(d.get("phone")||"").trim(), email:String(d.get("email")||"").trim(),
      delivery:d.get("delivery")||"delivery", address:String(d.get("address")||"").trim(),
      payment:d.get("payment")||"cash", comment:String(d.get("comment")||"").trim().slice(0,1000)
    };
    var e = {};
    if(v.name.length<2) e.name="Укажите имя";
    if(digits(v.phone).length<10) e.phone="Введите корректный телефон";
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email="Введите корректный email";
    if(v.delivery==="delivery" && v.address.length<5) e.address="Укажите адрес доставки";
    ["name","phone","email","address"].forEach(function(f){ setErr(form,f,e[f]); });
    var box = $("formError");
    if(Object.keys(e).length){ box.textContent="Проверьте выделенные поля."; box.style.display="block"; return; }
    box.style.display="none";
    if(!S.cart.count()) { location.hash="#/cart"; return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true;
    var order = S.orders.create(v);
    $("app").innerHTML = viewSuccess(order); window.scrollTo(0,0);
  }
  function submitTrack(form){
    var d = new FormData(form), number = String(d.get("number")||"").trim().toUpperCase(), dg = digits(d.get("phone")).slice(-10);
    var eb = $("trackError"), rb = $("trackResult");
    setErr(form,"number",number.length<3?"Введите номер заказа":""); setErr(form,"phone",dg.length<10?"Введите телефон":"");
    if(number.length<3||dg.length<10){ eb.style.display="none"; rb.innerHTML=""; return; }
    var o = S.orders.find(number,dg);
    if(!o){ eb.textContent="Заказ не найден на этом устройстве. Проверьте номер и телефон или позвоните нам."; eb.style.display="block"; rb.innerHTML=""; return; }
    eb.style.display="none"; rb.innerHTML = trackResult(o);
  }
  function submitLead(form){
    var d = new FormData(form); if(d.get("website")) return;
    var v = {name:String(d.get("name")||"").trim(), phone:String(d.get("phone")||"").trim(), email:String(d.get("email")||"").trim(), message:String(d.get("message")||"").trim().slice(0,1000)};
    setErr(form,"name",v.name.length<2?"Укажите имя":""); setErr(form,"phone",digits(v.phone).length<10?"Введите корректный телефон":"");
    if(v.name.length<2||digits(v.phone).length<10) return;
    S.orders.lead(v).then(function(ok){
      var warn = (!cfg.ORDER_ENDPOINT || ok) ? "" : '<div class="alert alert-warn">Не удалось отправить автоматически — позвоните нам: '+esc(cfg.PHONE)+'.</div>';
      $("leadWrap").innerHTML = '<div style="text-align:center;padding:24px 0"><div class="success-ico">✓</div><h2>Сообщение принято</h2>'+
        '<p class="muted">Менеджер свяжется с вами в рабочее время. Срочно — '+esc(cfg.PHONE)+'.</p>'+warn+'</div>';
    });
  }

  /* ---------- роутер ---------- */
  function parseHash(){
    var raw = location.hash.replace(/^#/,"") || "/", p = raw.split("?");
    return {path:p[0]||"/", params:new URLSearchParams(p[1]||"")};
  }
  function setNav(path){
    var base = "/"+(path.split("/").filter(Boolean)[0]||"");
    Array.prototype.forEach.call(document.querySelectorAll("[data-nav]"),function(a){
      var t = a.getAttribute("data-nav"); a.classList.toggle("active", t==="/" ? base==="/" : base===t);
    });
  }
  function render(){
    var r = parseHash(), seg = r.path.split("/").filter(Boolean), html;
    try{
      switch(seg[0]){
        case undefined: html = viewHome(); break;
        case "catalog": html = viewCatalog(r.params); break;
        case "product": html = viewProduct(seg[1]); break;
        case "cart": html = viewCart(); break;
        case "checkout": html = viewCheckout(); break;
        case "track": html = viewTrack(r.params); break;
        case "about": html = viewAbout(); break;
        case "services": html = viewServices(); break;
        case "contacts": html = viewContacts(); break;
        default: html = notFound();
      }
    }catch(err){ console.error(err); html = notFound(); }
    $("app").innerHTML = html;
    window.scrollTo(0,0); setNav(r.path); S.cart.updateBadge(); $("mobileNav").classList.remove("open");
    bind(seg, r.params);
  }
  function bind(seg, params){
    var s = seg[0];
    if(s==="catalog"){
      catalogState = {cat:params.get("category")||"all", q:params.get("q")||"", sort:params.get("sort")||"popular"};
      renderGrid();
      $("searchInput").addEventListener("input",function(){ catalogState.q=this.value; renderGrid(); });
      $("sortSelect").addEventListener("change",function(){ catalogState.sort=this.value; renderGrid(); });
      $("chips").addEventListener("click",function(e){
        var b = e.target.closest("[data-cat]"); if(!b) return;
        catalogState.cat = b.getAttribute("data-cat");
        Array.prototype.forEach.call(this.querySelectorAll(".chip"),function(c){ c.classList.toggle("active",c===b); });
        renderGrid();
      });
    }
    if(s==="product"){
      var p = S.findProduct(seg[1]), q = $("pdQty"); if(!p||!q) return;
      Array.prototype.forEach.call(document.querySelectorAll("[data-pq]"),function(b){
        b.addEventListener("click",function(){ q.textContent = Math.max(1,Math.min(999,parseInt(q.textContent,10)+parseInt(b.getAttribute("data-pq"),10))); });
      });
      $("pdAdd").addEventListener("click",function(){
        S.cart.add(p.id,parseInt(q.textContent,10)); toast(p.name+" — в корзине");
        var self=this; self.textContent="Добавлено ✓"; setTimeout(function(){ self.textContent="В корзину"; },1600);
      });
    }
    if(s==="cart"){
      Array.prototype.forEach.call(document.querySelectorAll("[data-cq]"),function(b){
        b.addEventListener("click",function(){
          var id=b.getAttribute("data-cq"), line=S.cart.items().filter(function(i){return i.id===id;})[0];
          if(line){ S.cart.setQty(id,line.qty+parseInt(b.getAttribute("data-d"),10)); render(); }
        });
      });
      Array.prototype.forEach.call(document.querySelectorAll("[data-remove]"),function(b){
        b.addEventListener("click",function(){ S.cart.remove(b.getAttribute("data-remove")); render(); });
      });
    }
    if(s==="checkout"){
      var f = $("checkoutForm"); if(!f) return;
      f.addEventListener("change",function(e){
        if(e.target.type!=="radio") return;
        Array.prototype.forEach.call(f.querySelectorAll('input[type="radio"]'),function(r){ r.closest(".radio-card").classList.toggle("checked",r.checked); });
        if(e.target.name==="delivery"){
          $("addressWrap").style.display = e.target.value==="pickup" ? "none" : "block";
          var t = S.cart.totals(e.target.value);
          $("coFee").textContent = t.fee ? money(t.fee) : "бесплатно"; $("coTotal").textContent = money(t.total);
        }
      });
      f.addEventListener("submit",function(e){ e.preventDefault(); submitCheckout(f); });
    }
    if(s==="track"){ var tf=$("trackForm"); tf.addEventListener("submit",function(e){ e.preventDefault(); submitTrack(tf); }); }
    if(s==="contacts"){ var lf=$("leadForm"); lf.addEventListener("submit",function(e){ e.preventDefault(); submitLead(lf); }); }
  }

  document.addEventListener("click",function(e){
    var b = e.target.closest("[data-add]"); if(!b) return;
    e.preventDefault();
    var p = S.productById(b.getAttribute("data-add")); if(!p) return;
    S.cart.add(p.id,1); toast(p.name+" — в корзине"); b.classList.add("in"); b.textContent="✓";
  });
  $("burger").addEventListener("click",function(){ $("mobileNav").classList.toggle("open"); });
  window.addEventListener("hashchange",render);
  $("year").textContent = new Date().getFullYear();
  render();
  S.orders.retryPending();
})(window.SSM);
