var IMG="https://media.base44.com/images/public/6afe0fd83210e28099b4ebb7/";
var CATS=[
 {s:"brick",t:"Кирпич",n:"Силикатный, керамический, клинкерный",i:IMG+"1383c6587_generated_581369d3.png"},
 {s:"cement",t:"Цемент и смеси",n:"М400, М500, белый, кладочные",i:IMG+"a24c57170_generated_2e7a9b66.png"},
 {s:"tools",t:"Инструменты",n:"Профессиональный электроинструмент",i:IMG+"6ee475265_generated_cbf31be9.png"},
 {s:"finish",t:"Отделка",n:"Штукатурка, краска, ламинат",i:IMG+"638f52603_generated_4d0703a5.png"}
];
var P=[
 {id:"p1",s:"brick-silicate-m150",n:"Кирпич силикатный М150",c:"brick",pr:28,u:"шт",i:IMG+"09bb6232f_generated_59a2be7d.png",sh:"Одинарный, полнотелый, 250×120×65 мм",d:"Полнотелый силикатный кирпич М150 для несущих стен и перегородок. Морозостойкость F50, водопоглощение до 12%. Отгружается на поддонах по 250 штук.",sp:["Марка: М150","Размер: 250×120×65 мм","Морозостойкость: F50","Поддон: 250 шт"],pop:1},
 {id:"p2",s:"brick-ceramic-hollow",n:"Кирпич керамический пустотелый",c:"brick",pr:35,u:"шт",i:IMG+"88a18d8a3_generated_bef964ce.png",sh:"Для облицовки и кладки, высокая морозостойкость",d:"Пустотелый керамический кирпич с высокой морозостойкостью и низкой теплопроводностью. Подходит для наружных стен и облицовки фасада.",sp:["Марка: М125","Размер: 250×120×65 мм","Морозостойкость: F75","Поддон: 336 шт"],pop:1},
 {id:"p3",s:"brick-clinker",n:"Кирпич клинкерный",c:"brick",pr:52,u:"шт",i:IMG+"ab1c3c313_generated_8d38daac.png",sh:"Премиум-класс для фасадных работ",d:"Клинкерный кирпич премиум-класса для фасадных работ. Плотная структура, стойкость к влаге и перепадам температур, точная геометрия блока.",sp:["Марка: М200","Размер: 240×115×71 мм","Морозостойкость: F100","Поддон: 288 шт"],pop:0},
 {id:"p4",s:"cement-m500",n:"Цемент М500 Д20, 50 кг",c:"cement",pr:480,u:"мешок",i:IMG+"607a84587_generated_19a8784a.png",sh:"Портландцемент для бетона и растворов",d:"Портландцемент М500 Д20 в мешках по 50 кг. Применяется для изготовления бетона высоких марок, фундаментных работ и ответственных конструкций.",sp:["Марка: М500 Д20","Вес мешка: 50 кг","Начало схватывания: не ранее 45 мин","Прочность на 28 сутки: не менее 49,4 МПа"],pop:1},
 {id:"p5",s:"cement-m400",n:"Цемент М400 Д20, 50 кг",c:"cement",pr:420,u:"мешок",i:IMG+"009e32d00_generated_d5c71de6.png",sh:"Общестроительный, для кладки и стяжки",d:"Общестроительный портландцемент М400 Д20. Универсальный состав для кладочных растворов, стяжек и штукатурных работ.",sp:["Марка: М400 Д20","Вес мешка: 50 кг","Область: кладка, стяжка","Прочность на 28 сутки: не менее 39,2 МПа"],pop:1},
 {id:"p6",s:"cement-white",n:"Цемент белый М600, 25 кг",c:"cement",pr:690,u:"мешок",i:IMG+"552b0a2d7_generated_1e2ac70a.png",sh:"Для декоративных работ и затирок",d:"Белый портландцемент М600 для декоративных составов, затирок, скульптурных работ и отделки фасадов. Высокая белизна, стабильный цвет.",sp:["Марка: М600","Вес мешка: 25 кг","Белизна: 80+","Область: декор, отделка"],pop:0},
 {id:"p7",s:"makita-hr5001",n:"Перфоратор Makita HR5001C",c:"tools",pr:32900,u:"шт",i:IMG+"63675fa4f_generated_7e6e8646.png",sh:"1500 Вт, SDS-Max, 3 режима",d:"Профессиональный перфоратор SDS-Max для тяжёлых работ: бурение бетона, долбление, штробление. Система гашения вибрации и защита от перегрузки.",sp:["Мощность: 1500 Вт","Патрон: SDS-Max","Энергия удара: 18 Дж","Гарантия: 24 месяца"],pop:1},
 {id:"p8",s:"bosch-gws-180",n:"Болгарка Bosch GWS 180",c:"tools",pr:12400,u:"шт",i:IMG+"1dc77c314_generated_18edb677.png",sh:"УШМ 180 мм, 2000 Вт",d:"Углошлифовальная машина с диском 180 мм и защитой от перегрузки. Подходит для резки металла, бетона и зачистки поверхностей.",sp:["Мощность: 2000 Вт","Диск: 180 мм","Обороты: 8500 об/мин","Гарантия: 12 месяцев"],pop:1},
 {id:"p9",s:"dewalt-dcd996",n:"Шуруповёрт DeWALT DCD996",c:"tools",pr:21900,u:"шт",i:IMG+"fa7efaa75_generated_9cca16a8.png",sh:"Бесщёточный, 20 В, 3 скорости",d:"Бесщёточный аккумуляторный шуруповёрт 20 В с трёхскоростным редуктором и металлическим патроном. В комплекте два аккумулятора и кейс.",sp:["Напряжение: 20 В","Крутящий момент: 95 Нм","Скорости: 3","Комплект: 2 АКБ, кейс"],pop:0},
 {id:"p10",s:"knauf-rotband",n:"Штукатурка Knauf Rotband, 30 кг",c:"finish",pr:690,u:"мешок",i:IMG+"f81dfed47_generated_206458fb.png",sh:"Гипсовая штукатурка для стен и потолков",d:"Гипсовая штукатурная смесь для ручного нанесения на стены и потолки. Толщина слоя до 50 мм, ровная поверхность без дополнительного шпаклевания.",sp:["Вес мешка: 30 кг","Слой: 5–50 мм","Расход: 8,5 кг/м² при 10 мм","Время работы: 20–25 мин"],pop:1},
 {id:"p11",s:"tikkurila-paint",n:"Краска интерьерная Tikkurila, 9 л",c:"finish",pr:8900,u:"шт",i:IMG+"0e76944c1_generated_01eb5078.png",sh:"Матовая, для стен и потолков",d:"Матовая интерьерная краска на водной основе для стен и потолков. Укрывистая, без запаха, моется влажной губкой. Банка 9 литров.",sp:["Объём: 9 л","Тип: матовая, водоэмульсионная","Расход: до 90 м²","Колеровка: по каталогу RAL"],pop:0},
 {id:"p12",s:"classen-laminate",n:"Ламинат Classen, 33 класс",c:"finish",pr:2190,u:"упаковка",i:IMG+"1ba24ff3b_generated_1f4212c0.png",sh:"Дуб серый, 2,1 м², износостойкий",d:"Ламинат 33 класса износостойкости с фаской по периметру. Замковое соединение без клея, подходит для коммерческих помещений.",sp:["Класс: 33","Площадь упаковки: 2,1 м²","Толщина: 8 мм","Замок: click"],pop:1}
];
var ADV=[
 {i:"#i-truck",t:"Доставка от 1 дня",x:"Собственный автопарк из 25 машин. Бесплатно по Москве при заказе от 50 000 ₽."},
 {i:"#i-shield",t:"Гарантия и ГОСТ",x:"Вся продукция сертифицирована, паспорта качества и сертификаты — по запросу."},
 {i:"#i-percent",t:"Условия для опта",x:"Персональный менеджер, отсрочка платежа до 60 дней и гибкие скидки."},
 {i:"#i-clock",t:"Семь дней в неделю",x:"Склад и офис работают без выходных, заявки принимаем с 8:00 до 20:00."}
];
var REV=[
 {n:"Александр Петров",c:"ООО «СтройДом»",t:"Отличный ассортимент и быстрая доставка. Заказываем регулярно, всегда всё вовремя и без брака."},
 {n:"Екатерина Смирнова",c:"Студия ремонта «Ремонт+»",t:"Взяли отделочные материалы для ремонта офиса. Качество супер, цены приятно удивили."},
 {n:"Дмитрий Иванов",c:"ИП Иванов Д.А.",t:"Работаем с СуперСтройМаркет уже пять лет. Надёжный партнёр, всегда идут навстречу."}
];
var SVC=[
 {i:"#i-truck",t:"Доставка",x:"Собственный автопарк из 25 машин. По Москве — от одного дня, по России — от трёх дней.",f:["Бесплатно от 50 000 ₽","Подъём на этаж","Срочная доставка за 3 часа"]},
 {i:"#i-box",t:"Разгрузка и хранение",x:"Такелажники аккуратно разместят материалы на объекте или на нашем складе.",f:["Ручная и механизированная разгрузка","Ответственное хранение","Учёт остатков"]},
 {i:"#i-users",t:"Оптовые поставки",x:"Постоянным клиентам — гибкая система скидок, отсрочка платежа и персональный менеджер.",f:["Отсрочка до 60 дней","Скидки от объёма","Договор и закрывающие документы"]}
];
var STEPS=[["Заявка","Присылаете список материалов или смету — по телефону, в форме или на почту."],["Расчёт","Менеджер проверяет наличие, считает доставку и скидку за объём, присылает счёт."],["Комплектация","Собираем заказ на складе, при необходимости — документы и сертификаты."],["Доставка","Везём на объект в согласованное время, разгружаем и поднимаем на этаж."]];
var STAT={new:["Новый","bdg-new"],confirmed:["Подтверждён","bdg-confirmed"],shipped:["Отправлен","bdg-shipped"],done:["Доставлен","bdg-done"],cancelled:["Отменён","bdg-cancelled"]};
var FREE=50000,FEE=1500,PICKUP="Самовывоз, Москва, ул. Строительная, 15";

function esc(v){return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function money(n){return new Intl.NumberFormat("ru-RU").format(Math.round(n))+" ₽"}
function bySlug(s){return P.filter(function(p){return p.s===s})[0]}
function catTitle(s){var c=CATS.filter(function(x){return x.s===s})[0];return c?c.t:"Каталог"}
function ico(id,cls){return '<svg class="i'+(cls?" "+cls:"")+'"><use href="'+id+'"/></svg>'}
function plural(n,a,b,c){var m10=n%10,m100=n%100;if(m10===1&&m100!==11)return a;if(m10>=2&&m10<=4&&(m100<10||m100>=20))return b;return c}
function toast(m){var el=document.getElementById("toast");el.textContent=m;el.classList.add("on");clearTimeout(el._t);el._t=setTimeout(function(){el.classList.remove("on")},2600)}

var CK="ssm_cart_v1",OK="ssm_orders_v1";
function readCart(){try{var a=JSON.parse(localStorage.getItem(CK)||"[]");return Array.isArray(a)?a:[]}catch(e){return []}}
function writeCart(a){try{localStorage.setItem(CK,JSON.stringify(a))}catch(e){}updateBadge()}
function addToCart(id,q){var a=readCart(),l=a.filter(function(x){return x.id===id})[0];if(l)l.q+=(q||1);else a.push({id:id,q:q||1});writeCart(a)}
function setQty(id,q){writeCart(readCart().map(function(x){return x.id===id?{id:id,q:q}:x}).filter(function(x){return x.q>0}))}
function removeItem(id){writeCart(readCart().filter(function(x){return x.id!==id}))}
function lines(){return readCart().map(function(x){var p=P.filter(function(y){return y.id===x.id})[0];return p?{p:p,q:x.q,t:p.pr*x.q}:null}).filter(Boolean)}
function count(){return readCart().reduce(function(s,x){return s+x.q},0)}
function totals(delivery){var ls=lines(),sub=ls.reduce(function(s,l){return s+l.t},0),fee=0;if(delivery!=="pickup"&&sub>0&&sub<FREE)fee=FEE;return {ls:ls,sub:sub,fee:fee,total:sub+fee,cnt:ls.reduce(function(s,l){return s+l.q},0)}}
function updateBadge(){var n=count(),b=document.getElementById("cb");if(!b)return;b.textContent=n;b.classList.toggle("on",n>0)}

function readOrders(){try{var a=JSON.parse(localStorage.getItem(OK)||"[]");return Array.isArray(a)?a:[]}catch(e){return []}}
function saveOrder(o){var a=readOrders();a.unshift(o);try{localStorage.setItem(OK,JSON.stringify(a.slice(0,50)))}catch(e){}}
function orderNo(){var L="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",c="";for(var i=0;i<4;i++)c+=L[Math.floor(Math.random()*L.length)];return "SSM-"+c+String(Date.now()).slice(-2)}
function fmtDate(iso){var d=new Date(iso);return isNaN(d)?"":d.toLocaleString("ru-RU",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}

function card(p){
  var inCart=readCart().some(function(x){return x.id===p.id});
  return '<article class="pc">'+
    '<a class="pc-img" href="#/product/'+p.s+'"><img src="'+p.i+'" alt="'+esc(p.n)+'" loading="lazy"></a>'+
    '<div class="pc-b"><span class="pc-cat">'+esc(catTitle(p.c))+'</span>'+
      '<h3><a href="#/product/'+p.s+'">'+esc(p.n)+'</a></h3>'+
      '<p class="sh">'+esc(p.sh)+'</p>'+
      '<div class="pc-f"><div class="price">'+money(p.pr)+'<small>за '+esc(p.u)+'</small></div>'+
      '<button class="add'+(inCart?" in":"")+'" data-add="'+p.id+'" aria-label="В корзину">'+ico(inCart?"#i-check":"#i-plus")+'</button></div>'+
    '</div></article>';
}
function grid(list){return '<div class="g4">'+list.map(card).join("")+'</div>'}
function autoGrid(items,min){return '<div class="g4" style="grid-template-columns:repeat(auto-fit,minmax('+min+',1fr))">'+items.join("")+'</div>'}
function cta(){
  return '<div class="wrap"><section class="cta"><div><h2>Нужен расчёт по вашему объекту?</h2>'+
    '<p>Пришлите список материалов — подготовим смету и проверим наличие на складе в течение часа.</p></div>'+
    '<div class="cta-a"><a class="btn btn-acc" href="#/contacts">Запросить смету</a>'+
    '<a class="btn btn-ghost" href="tel:+78005553535">8 800 555-35-35</a></div></section></div>';
}

function vHome(){
  var pop=P.filter(function(p){return p.pop}).slice(0,8);
  return '<section class="hero"><div class="wrap hero-g"><div>'+
    '<span class="eyebrow">Свой склад 15 000 м² · доставка от 1 дня</span>'+
    '<h1>Стройматериалы<br>с доставкой <span class="acc">по России</span></h1>'+
    '<p class="lead">Кирпич, цемент, инструмент и отделка от проверенных производителей. Работаем с частными мастерами и строительными компаниями с 2005 года.</p>'+
    '<div class="hero-a"><a class="btn btn-acc" href="#/catalog">Перейти в каталог</a>'+
    '<a class="btn btn-ghost" href="#/contacts">Получить консультацию</a></div>'+
    '<ul class="hero-p"><li>'+ico("#i-check")+'Сертификаты ГОСТ</li><li>'+ico("#i-check")+'Доставка от 1 дня</li><li>'+ico("#i-check")+'Скидки от объёма</li></ul>'+
    '</div><div class="hero-m"><img src="'+IMG+'373d4f7c1_generated_708a75d1.png" alt="Склад строительных материалов">'+
    '<div class="hero-b">20 лет на рынке<br>5 000+ постоянных клиентов</div></div></div></section>'+
    '<section class="sec"><div class="wrap"><div class="sec-h"><div><h2>Почему выбирают нас</h2><p>Склад, логистика и документы — всё в одном месте</p></div></div>'+
    '<div class="g4">'+ADV.map(function(a){return '<div class="adv"><div class="adv-ico">'+ico(a.i)+'</div><h3>'+esc(a.t)+'</h3><p>'+esc(a.x)+'</p></div>'}).join("")+'</div></div></section>'+
    '<section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-h"><div><h2>Категории товаров</h2><p>Всё для стройки — от фундамента до отделки</p></div>'+
    '<a class="btn btn-out btn-sm" href="#/catalog">Смотреть все товары</a></div>'+
    '<div class="g4">'+CATS.map(function(c){return '<a class="cat" href="#/catalog?category='+c.s+'"><img src="'+c.i+'" alt="'+esc(c.t)+'" loading="lazy"><div class="cat-b"><h3>'+esc(c.t)+'</h3><p>'+esc(c.n)+'</p></div></a>'}).join("")+'</div></div></section>'+
    '<section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-h"><div><h2>Хиты продаж</h2><p>Позиции, которые чаще всего заказывают</p></div>'+
    '<a class="btn btn-out btn-sm" href="#/catalog">Весь каталог</a></div>'+grid(pop)+'</div></section>'+
    '<section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-h"><div><h2>Отзывы клиентов</h2><p>Нам доверяют подрядчики и частные мастера</p></div></div>'+
    autoGrid(REV.map(function(r){return '<div class="rev"><div class="stars">'+ico("#i-star")+ico("#i-star")+ico("#i-star")+ico("#i-star")+ico("#i-star")+'</div><p>'+esc(r.t)+'</p><div class="rev-by">'+esc(r.n)+'<small>'+esc(r.c)+'</small></div></div>'}),"240px")+
    '</div></section>'+cta();
}

function vCatalog(params){
  var cat=params.get("category")||"all";
  if(cat!=="all"&&!CATS.some(function(c){return c.s===cat}))cat="all";
  var q=params.get("q")||"",sort=params.get("sort")||"popular";
  return '<section class="ph"><div class="wrap"><span class="eyebrow">Каталог</span><h1>Строительные материалы</h1>'+
    '<p>Более 15 000 позиций на складе. Цены указаны с учётом розничных продаж, для опта действуют скидки.</p></div></section>'+
    '<section class="sec"><div class="wrap"><div class="tb">'+
    '<div class="srch">'+ico("#i-search")+'<input id="q" type="search" placeholder="Поиск по названию: кирпич, цемент, краска" value="'+esc(q)+'"></div>'+
    '<select class="sel" id="sort"><option value="popular"'+(sort==="popular"?" selected":"")+'>Сначала популярные</option>'+
    '<option value="price-asc"'+(sort==="price-asc"?" selected":"")+'>Цена: по возрастанию</option>'+
    '<option value="price-desc"'+(sort==="price-desc"?" selected":"")+'>Цена: по убыванию</option>'+
    '<option value="name"'+(sort==="name"?" selected":"")+'>По названию</option></select></div>'+
    '<div class="chips" id="chips"><button class="chip'+(cat==="all"?" on":"")+'" data-cat="all">Все товары</button>'+
    CATS.map(function(c){return '<button class="chip'+(cat===c.s?" on":"")+'" data-cat="'+c.s+'">'+esc(c.t)+'</button>'}).join("")+'</div>'+
    '<div class="cnt" id="cnt"></div><div id="grid"></div></div></section>';
}

function filtered(s){
  var l=P.slice();
  if(s.cat!=="all")l=l.filter(function(p){return p.c===s.cat});
  var t=s.q.trim().toLowerCase();
  if(t)l=l.filter(function(p){return p.n.toLowerCase().indexOf(t)>-1||p.sh.toLowerCase().indexOf(t)>-1});
  if(s.sort==="price-asc")l.sort(function(a,b){return a.pr-b.pr});
  else if(s.sort==="price-desc")l.sort(function(a,b){return b.pr-a.pr});
  else if(s.sort==="name")l.sort(function(a,b){return a.n.localeCompare(b.n,"ru")});
  else l.sort(function(a,b){return (b.pop?1:0)-(a.pop?1:0)});
  return l;
}

function renderGrid(s){
  var l=filtered(s),g=document.getElementById("grid"),c=document.getElementById("cnt");
  if(!g)return;
  c.textContent=l.length+" "+plural(l.length,"товар","товара","товаров");
  g.innerHTML=l.length?grid(l):'<div class="empty"><h3>Ничего не найдено</h3><p>Попробуйте изменить запрос или выбрать другую категорию.</p><button class="btn btn-dark btn-sm" id="reset">Сбросить фильтры</button></div>';
  var r=document.getElementById("reset");
  if(r)r.onclick=function(){
    s.cat="all";s.q="";s.sort="popular";
    document.getElementById("q").value="";
    document.getElementById("sort").value="popular";
    Array.prototype.forEach.call(document.querySelectorAll("#chips .chip"),function(b){b.classList.toggle("on",b.getAttribute("data-cat")==="all")});
    renderGrid(s);
  };
}

function vProduct(slug){
  var p=bySlug(slug);
  if(!p)return v404();
  var rel=P.filter(function(x){return x.c===p.c&&x.id!==p.id}).slice(0,4);
  return '<div class="wrap"><div class="crumbs"><a href="#/">Главная</a> / <a href="#/catalog">Каталог</a> / <a href="#/catalog?category='+p.c+'">'+esc(catTitle(p.c))+'</a></div>'+
    '<div class="pd"><div class="pd-img"><img src="'+p.i+'" alt="'+esc(p.n)+'"></div><div>'+
    '<span class="eyebrow">'+esc(catTitle(p.c))+'</span><h1>'+esc(p.n)+'</h1>'+
    '<p class="mut" style="margin:0;font-size:14px">'+esc(p.sh)+'</p>'+
    '<div class="buy"><div class="buy-r"><div class="buy-p">'+money(p.pr)+'</div>'+
    '<span class="mut" style="font-size:13px">за '+esc(p.u)+'</span>'+
    '<div style="margin-left:auto;display:flex;gap:10px;align-items:center">'+
    '<div class="qty"><button type="button" data-pq="-1">−</button><span id="pq">1</span><button type="button" data-pq="1">+</button></div>'+
    '<button class="btn btn-acc" id="padd">В корзину</button></div></div>'+
    '<div class="buy-m"><span>'+ico("#i-check")+'В наличии на складе</span><span>'+ico("#i-truck")+'Доставка от 1 дня</span><span>'+ico("#i-doc")+'Сертификаты ГОСТ</span></div></div>'+
    '<p class="mut" style="margin:14px 0 0;font-size:14.5px">'+esc(p.d)+'</p>'+
    '<div class="specs"><h3>Характеристики</h3><ul>'+p.sp.map(function(x){return '<li>'+esc(x)+'</li>'}).join("")+'</ul></div>'+
    '</div></div>'+
    (rel.length?'<section class="sec" style="padding-bottom:0"><div class="sec-h"><div><h2>Похожие товары</h2></div></div>'+grid(rel)+'</section>':'')+
    '</div>';
}

function vCart(){
  var t=totals("delivery");
  if(!t.ls.length)return '<div class="wrap"><div class="empty" style="margin:56px 0"><h3>Корзина пуста</h3><p>Добавьте материалы из каталога — сохраним их здесь, пока вы выбираете.</p><a class="btn btn-acc" href="#/catalog">Перейти в каталог</a></div></div>';
  return '<div class="wrap"><div style="padding:32px 0 8px"><h1 style="font-size:30px;font-weight:800">Корзина</h1></div>'+
    '<div class="cg" style="margin-bottom:56px"><div>'+
    t.ls.map(function(l){return '<div class="ci"><img src="'+l.p.i+'" alt="'+esc(l.p.n)+'">'+
      '<div><h3><a href="#/product/'+l.p.s+'">'+esc(l.p.n)+'</a></h3><div class="u">'+money(l.p.pr)+' / '+esc(l.p.u)+'</div>'+
      '<div class="qty" style="margin-top:8px"><button data-cq="'+l.p.id+'" data-d="-1">−</button><span>'+l.q+'</span><button data-cq="'+l.p.id+'" data-d="1">+</button></div></div>'+
      '<div class="ci-r"><div class="price">'+money(l.t)+'</div><button class="rm" data-rm="'+l.p.id+'">Удалить</button></div></div>'}).join("")+
    '<a class="btn btn-out btn-sm" href="#/catalog">Продолжить покупки</a></div>'+
    '<div class="summ"><h3>Ваш заказ</h3>'+
    '<div class="sr"><span>Товары ('+t.cnt+')</span><b>'+money(t.sub)+'</b></div>'+
    '<div class="sr"><span>Доставка</span><b>'+(t.fee?money(t.fee):"бесплатно")+'</b></div>'+
    '<div class="st"><span>Итого</span><b>'+money(t.total)+'</b></div>'+
    (t.sub<FREE?'<p class="hint">До бесплатной доставки не хватает '+money(FREE-t.sub)+'.</p>':'<p class="hint">Доставка по Москве бесплатно.</p>')+
    '<a class="btn btn-acc btn-blk" style="margin-top:16px" href="#/checkout">Оформить заказ</a></div></div></div>';
}

function vCheckout(){
  var t=totals("delivery");
  if(!t.ls.length)return '<div class="wrap"><div class="empty" style="margin:56px 0"><h3>Корзина пуста</h3><p>Нечего оформлять — сначала выберите материалы в каталоге.</p><a class="btn btn-acc" href="#/catalog">В каталог</a></div></div>';
  return '<div class="wrap"><div style="padding:32px 0 8px"><h1 style="font-size:30px;font-weight:800">Оформление заказа</h1></div>'+
    '<div class="cg" style="margin-bottom:56px"><form class="panel" id="cof" novalidate>'+
    '<h2>Контактные данные</h2><div class="fg">'+
    '<div><label class="lbl">Имя *</label><input class="field" name="name" placeholder="Как к вам обращаться"><div class="em" data-e="name"></div></div>'+
    '<div class="fg two"><div><label class="lbl">Телефон *</label><input class="field" name="phone" inputmode="tel" placeholder="+7 (___) ___-__-__"><div class="em" data-e="phone"></div></div>'+
    '<div><label class="lbl">Email *</label><input class="field" name="email" inputmode="email" placeholder="you@example.ru"><div class="em" data-e="email"></div></div></div></div>'+
    '<h2 style="margin-top:24px">Доставка</h2><div class="fg">'+
    '<label class="rc on"><input type="radio" name="delivery" value="delivery" checked><span><b>Доставка на объект</b><small>'+(t.sub>=FREE?"Бесплатно":money(FEE)+" по Москве")+'</small></span></label>'+
    '<label class="rc"><input type="radio" name="delivery" value="pickup"><span><b>Самовывоз со склада</b><small>'+esc(PICKUP)+' · бесплатно</small></span></label>'+
    '<div id="addrWrap"><label class="lbl">Адрес доставки *</label><input class="field" name="address" placeholder="Город, улица, дом, квартира"><div class="em" data-e="address"></div></div></div>'+
    '<h2 style="margin-top:24px">Оплата</h2><div class="fg">'+
    '<label class="rc on"><input type="radio" name="payment" value="cash" checked><span><b>Наличными при получении</b><small>Курьеру или на складе</small></span></label>'+
    '<label class="rc"><input type="radio" name="payment" value="card"><span><b>Картой</b><small>Оплата по ссылке после подтверждения</small></span></label>'+
    '<label class="rc"><input type="radio" name="payment" value="invoice"><span><b>По счёту для юрлиц</b><small>Счёт и закрывающие документы</small></span></label></div>'+
    '<div style="margin-top:24px"><label class="lbl">Комментарий</label><textarea class="field" name="comment" placeholder="Удобное время доставки, пожелания"></textarea></div>'+
    '<div class="al al-err" id="coErr" style="display:none;margin-top:16px"></div>'+
    '<button class="btn btn-acc btn-blk" type="submit" style="margin-top:18px">Подтвердить заказ</button>'+
    '<p class="hint" style="text-align:center">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p></form>'+
    '<div class="summ"><h3>Состав заказа</h3>'+
    t.ls.map(function(l){return '<div class="sr"><span>'+esc(l.p.n)+' × '+l.q+'</span><b>'+money(l.t)+'</b></div>'}).join("")+
    '<div class="st"><span>Итого</span><b>'+money(t.total)+'</b></div>'+
    '<p class="hint">Менеджер свяжется с вами в рабочее время, чтобы подтвердить состав и время доставки.</p></div></div></div>';
}

function vSuccess(o){
  return '<div class="wrap"><div class="succ"><div class="succ-ico">'+ico("#i-check")+'</div>'+
    '<h1>Заказ оформлен</h1><p class="mut" style="margin:10px 0 0">Менеджер свяжется с вами в рабочее время для подтверждения.</p>'+
    '<div class="ono">'+esc(o.number)+'</div>'+
    '<div class="dbox"><div class="sr"><span>Дата</span><b>'+esc(fmtDate(o.createdAt))+'</b></div>'+
    '<div class="sr"><span>Получатель</span><b>'+esc(o.name)+', '+esc(o.phone)+'</b></div>'+
    '<div class="sr"><span>Доставка</span><b>'+esc(o.delivery==="pickup"?"Самовывоз":o.address)+'</b></div>'+
    '<div class="sr"><span>Состав</span><b>'+esc(o.items.map(function(i){return i.name+" × "+i.qty}).join(", "))+'</b></div>'+
    '<div class="st"><span>Итого</span><b>'+money(o.total)+'</b></div></div>'+
    '<div style="display:flex;gap:12px;justify-content:center;margin-top:24px;flex-wrap:wrap">'+
    '<a class="btn btn-acc" href="#/track?number='+encodeURIComponent(o.number)+'">Отследить заказ</a>'+
    '<a class="btn btn-out" href="#/catalog">Вернуться в каталог</a></div>'+
    '<p class="hint" style="margin-top:22px">Сохраните номер заказа — по нему и телефону можно проверить статус.</p></div></div>';
}

function vTrack(params){
  var pre=params.get("number")||"";
  return '<div class="wrap"><div style="padding:32px 0 0"><span class="eyebrow">Отслеживание</span>'+
    '<h1 style="font-size:30px;font-weight:800;margin-top:8px">Статус заказа</h1>'+
    '<p class="mut" style="margin:10px 0 0">Введите номер заказа и телефон, указанный при оформлении.</p></div>'+
    '<div style="max-width:640px;margin:26px 0 56px"><form class="panel" id="trf" novalidate><div class="fg">'+
    '<div><label class="lbl">Номер заказа *</label><input class="field" name="number" placeholder="SSM-XXXX00" value="'+esc(pre)+'"><div class="em" data-e="number"></div></div>'+
    '<div><label class="lbl">Телефон *</label><input class="field" name="phone" inputmode="tel" placeholder="+7 (___) ___-__-__"><div class="em" data-e="phone"></div></div></div>'+
    '<div class="al al-err" id="trErr" style="display:none;margin-top:16px"></div>'+
    '<button class="btn btn-dark btn-blk" type="submit" style="margin-top:16px">Проверить статус</button></form>'+
    '<div id="trRes" style="margin-top:20px"></div></div></div>';
}

function trackCard(o){
  var st=STAT[o.status]||STAT.new;
  return '<div class="panel"><div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">'+
    '<div><div class="mut" style="font-size:12px">Заказ</div><b style="font-size:17px">'+esc(o.number)+'</b></div>'+
    '<span class="bdg '+st[1]+'">'+st[0]+'</span></div><div style="margin-top:16px">'+
    '<div class="sr"><span>Оформлен</span><b>'+esc(fmtDate(o.createdAt))+'</b></div>'+
    '<div class="sr"><span>Получатель</span><b>'+esc(o.name)+'</b></div>'+
    '<div class="sr"><span>'+(o.delivery==="pickup"?"Самовывоз":"Адрес доставки")+'</span><b>'+esc(o.address)+'</b></div></div>'+
    '<div style="margin-top:16px;border-top:1px solid var(--bd);padding-top:14px">'+
    o.items.map(function(i){return '<div class="sr"><span>'+esc(i.name)+' × '+i.qty+' '+esc(i.unit)+'</span><b>'+money(i.price*i.qty)+'</b></div>'}).join("")+
    '<div class="sr"><span>Доставка</span><b>'+(o.fee?money(o.fee):"бесплатно")+'</b></div>'+
    '<div class="st"><span>Итого</span><b>'+money(o.total)+'</b></div></div></div>';
}

function vAbout(){
  var stats=[["20+","лет на рынке"],["5 000+","клиентов"],["15 000","позиций на складе"],["1 200","доставок в месяц"]];
  var vals=[["#i-shield","Только проверенные поставщики","Работаем с 500+ производителями напрямую: без посредников и с полным пакетом документов на каждую партию."],
  ["#i-box","Склад 15 000 м²","Ходовые позиции всегда в наличии — отгружаем в день заказа, не ждём поставку неделями."],
  ["#i-truck","Своя логистика","25 машин, такелажники и подъём на этаж. Доставляем по Москве от одного дня, по России — от трёх."],
  ["#i-users","Персональный менеджер","Один человек ведёт ваш объект: считает смету, следит за отгрузками и сроками."]];
  return '<section class="ph"><div class="wrap"><span class="eyebrow">О компании</span>'+
    '<h1>Поставляем стройматериалы с 2005 года — без срывов сроков и сюрпризов в смете</h1>'+
    '<p>Начинали с одного склада в Москве, сегодня работаем с застройщиками, подрядчиками и частными мастерами по всей России. Держим на складе 15 000 позиций и отвечаем за качество каждой партии.</p></div></section>'+
    '<section class="sec"><div class="wrap two"><div class="media"><img src="'+IMG+'77756c240_generated_66272cbf.png" alt="Складской комплекс СуперСтройМаркет"></div><div>'+
    '<h2 style="font-size:26px;font-weight:700">Как мы работаем</h2>'+
    '<p class="mut" style="margin:14px 0 0;font-size:14.5px">Заявка попадает к менеджеру, который проверяет наличие, считает доставку и присылает счёт. После оплаты или согласования отсрочки груз комплектуется на складе и уходит на объект — вы получаете накладные и сертификаты вместе с материалами.</p>'+
    '<div class="stats">'+stats.map(function(s){return '<div class="stat"><b>'+s[0]+'</b><span>'+s[1]+'</span></div>'}).join("")+'</div></div></div></section>'+
    '<section class="sec" style="background:var(--sec)"><div class="wrap"><h2 style="font-size:26px;font-weight:700;margin-bottom:24px">Почему с нами удобно</h2>'+
    autoGrid(vals.map(function(v){return '<div class="adv" style="padding:24px"><div class="adv-ico">'+ico(v[0])+'</div><h3 style="font-size:15.5px">'+v[1]+'</h3><p>'+v[2]+'</p></div>'}),"260px")+
    '</div></section>'+cta();
}

function vServices(){
  return '<section class="ph c"><div class="wrap"><span class="eyebrow">Услуги</span><h1>Доставим, разгрузим и посчитаем</h1>'+
    '<p>Полный цикл: от расчёта сметы до подъёма материалов на этаж. Работаем с частными мастерами и строительными компаниями.</p></div></section>'+
    '<section class="sec"><div class="wrap">'+
    autoGrid(SVC.map(function(s){return '<div class="svc"><div class="svc-ico">'+ico(s.i)+'</div><h3>'+esc(s.t)+'</h3><p>'+esc(s.x)+'</p>'+
      '<ul>'+s.f.map(function(f){return '<li>'+ico("#i-check")+esc(f)+'</li>'}).join("")+'</ul></div>'}),"280px")+
    '</div></section>'+
    '<section class="sec" style="background:var(--sec)"><div class="wrap"><h2 style="font-size:26px;font-weight:700;margin-bottom:24px">Как проходит заказ</h2>'+
    '<div class="steps">'+STEPS.map(function(s,i){return '<div class="step"><b>0'+(i+1)+'</b><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div>'}).join("")+'</div></div></section>'+cta();
}

function vContacts(){
  var items=[["#i-pin","Склад и офис",["г. Москва, ул. Строительная, 15, стр. 3","Пандус для грузового транспорта"]],
  ["#i-phone","Телефоны",["8 800 555-35-35 — бесплатно по России","+7 495 123-45-67 — отдел опта"]],
  ["#i-mail","Почта",["info@superstroymarket.ru","opt@superstroymarket.ru — оптовые заявки"]],
  ["#i-clock","Режим работы",["Пн–Пт: 8:00–20:00","Сб–Вс: 9:00–18:00"]]];
  return '<div class="wrap"><div style="padding:36px 0 0"><span class="eyebrow">Контакты</span>'+
    '<h1 style="font-size:32px;font-weight:800;margin-top:8px">Свяжитесь с нами</h1>'+
    '<p class="mut" style="margin:10px 0 0">Перезвоним в течение рабочего дня, посчитаем смету и подскажем, что есть на складе прямо сейчас.</p></div>'+
    '<div class="contact-g"><div>'+items.map(function(i){
      return '<div class="citem"><div class="cico">'+ico(i[0])+'</div><div><h3>'+i[1]+'</h3>'+i[2].map(function(l){return '<p>'+esc(l)+'</p>'}).join("")+'</div></div>'}).join("")+
    '<div class="opt"><h3>Нужен опт или отсрочка платежа?</h3><p>Для строительных компаний готовим индивидуальные условия: скидка за объём, отсрочка до 60 дней и персональный менеджер.</p>'+
    '<a class="btn btn-acc btn-sm" href="tel:+74951234567">'+ico("#i-phone")+'Отдел опта</a></div></div>'+
    '<div class="panel"><div id="leadWrap"><h2>Напишите нам</h2><form class="fg" id="leadf" novalidate>'+
    '<div><input class="field" name="name" placeholder="Ваше имя *"><div class="em" data-e="name"></div></div>'+
    '<div><input class="field" name="phone" inputmode="tel" placeholder="Телефон *"><div class="em" data-e="phone"></div></div>'+
    '<input class="field" name="email" inputmode="email" placeholder="Email">'+
    '<textarea class="field" name="message" placeholder="Опишите задачу: объект, объём, сроки"></textarea>'+
    '<button class="btn btn-acc btn-blk" type="submit">Отправить сообщение</button>'+
    '<p class="hint" style="text-align:center;margin:0">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>'+
    '</form></div></div></div></div>';
}

function v404(){
  return '<div class="wrap"><div class="empty" style="margin:64px 0"><h3>Страница не найдена</h3>'+
    '<p>Возможно, товар был снят с продажи или ссылка устарела.</p><a class="btn btn-acc" href="#/catalog">В каталог</a></div></div>';
}

var st={cat:"all",q:"",sort:"popular"};
function parseHash(){
  var raw=location.hash.replace(/^#/,"")||"/",p=raw.split("?");
  return {path:p[0]||"/",params:new URLSearchParams(p[1]||"")};
}
function setNav(path){
  var base="/"+(path.split("/").filter(Boolean)[0]||"");
  Array.prototype.forEach.call(document.querySelectorAll("[data-nav]"),function(a){
    var t=a.getAttribute("data-nav");
    a.classList.toggle("on",t==="/"?base==="/":base===t);
  });
}
function render(){
  var r=parseHash(),seg=r.path.split("/").filter(Boolean),html="";
  if(!seg.length)html=vHome();
  else if(seg[0]==="catalog")html=vCatalog(r.params);
  else if(seg[0]==="product")html=vProduct(seg[1]);
  else if(seg[0]==="cart")html=vCart();
  else if(seg[0]==="checkout")html=vCheckout();
  else if(seg[0]==="track")html=vTrack(r.params);
  else if(seg[0]==="about")html=vAbout();
  else if(seg[0]==="services")html=vServices();
  else if(seg[0]==="contacts")html=vContacts();
  else html=v404();
  document.getElementById("app").innerHTML=html;
  window.scrollTo(0,0);
  setNav(r.path);
  updateBadge();
  document.getElementById("mnav").classList.remove("open");
  document.getElementById("brgI").innerHTML='<use href="#i-menu"/>';
  bind(seg,r.params);
}

function err(f,n,m){var i=f.querySelector('[name="'+n+'"]'),s=f.querySelector('[data-e="'+n+'"]');if(i)i.classList.toggle("err",!!m);if(s)s.textContent=m||""}

function bind(seg,params){
  if(seg[0]==="catalog"){
    st={cat:params.get("category")||"all",q:params.get("q")||"",sort:params.get("sort")||"popular"};
    renderGrid(st);
    var q=document.getElementById("q");
    if(q)q.addEventListener("input",function(){st.q=this.value;renderGrid(st)});
    var so=document.getElementById("sort");
    if(so)so.addEventListener("change",function(){st.sort=this.value;renderGrid(st)});
    var ch=document.getElementById("chips");
    if(ch)ch.addEventListener("click",function(e){
      var b=e.target.closest("[data-cat]");
      if(!b)return;
      st.cat=b.getAttribute("data-cat");
      Array.prototype.forEach.call(ch.querySelectorAll(".chip"),function(c){c.classList.toggle("on",c===b)});
      renderGrid(st);
    });
  }
  if(seg[0]==="product"){
    var pq=document.getElementById("pq"),prod=bySlug(seg[1]);
    Array.prototype.forEach.call(document.querySelectorAll("[data-pq]"),function(b){
      b.addEventListener("click",function(){
        var d=parseInt(b.getAttribute("data-pq"),10);
        pq.textContent=Math.max(1,Math.min(999,parseInt(pq.textContent,10)+d));
      });
    });
    var pa=document.getElementById("padd");
    if(pa&&prod)pa.addEventListener("click",function(){
      addToCart(prod.id,parseInt(pq.textContent,10));
      toast(prod.n+" — в корзине");
      pa.textContent="Добавлено";
      setTimeout(function(){pa.textContent="В корзину"},1800);
    });
  }
  if(seg[0]==="cart"){
    Array.prototype.forEach.call(document.querySelectorAll("[data-cq]"),function(b){
      b.addEventListener("click",function(){
        var id=b.getAttribute("data-cq"),d=parseInt(b.getAttribute("data-d"),10);
        var l=readCart().filter(function(x){return x.id===id})[0];
        if(l){setQty(id,l.q+d);render()}
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-rm]"),function(b){
      b.addEventListener("click",function(){removeItem(b.getAttribute("data-rm"));render()});
    });
  }
  if(seg[0]==="checkout"){
    var f=document.getElementById("cof");
    if(!f)return;
    f.addEventListener("change",function(e){
      if(e.target.name==="delivery")document.getElementById("addrWrap").style.display=e.target.value==="pickup"?"none":"block";
      if(e.target.type==="radio")Array.prototype.forEach.call(f.querySelectorAll(".rc"),function(c){c.classList.toggle("on",c.contains(e.target)&&e.target.checked)});
    });
    f.addEventListener("submit",function(e){e.preventDefault();submitCheckout(f)});
  }
  if(seg[0]==="track"){
    var tf=document.getElementById("trf");
    if(tf)tf.addEventListener("submit",function(e){e.preventDefault();submitTrack(tf)});
  }
  if(seg[0]==="contacts"){
    var lf=document.getElementById("leadf");
    if(lf)lf.addEventListener("submit",function(e){e.preventDefault();submitLead(lf)});
  }
}

function submitCheckout(f){
  var d=new FormData(f);
  var name=String(d.get("name")||"").trim(),phone=String(d.get("phone")||"").trim(),email=String(d.get("email")||"").trim(),
      delivery=d.get("delivery")||"delivery",address=String(d.get("address")||"").trim(),
      payment=d.get("payment")||"cash",comment=String(d.get("comment")||"").trim();
  var e={};
  if(name.length<2)e.name="Укажите имя";
  if(phone.replace(/\D/g,"").length<10)e.phone="Введите корректный телефон";
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))e.email="Введите корректный email";
  if(delivery==="delivery"&&address.length<5)e.address="Укажите адрес доставки";
  ["name","phone","email","address"].forEach(function(k){err(f,k,e[k])});
  var box=document.getElementById("coErr");
  if(Object.keys(e).length){box.textContent="Проверьте выделенные поля.";box.style.display="block";return}
  box.style.display="none";
  var t=totals(delivery);
  var order={number:orderNo(),createdAt:new Date().toISOString(),name:name,phone:phone,email:email,
    try {
      fetch("https://api.telegram.org/bot9159278260:AAHrTLTca0wQ7u8Eu4Ru5yPcczNwZEOrfho/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: "5468112563",
          text: "🔥 <b>Новый заказ!</b>\n\n👤 Имя: " + name + "\n📞 Тел: " + phone + "\n📍 Адрес: " + address,
          parse_mode: "HTML"
        })
      }).catch(e => console.log("TG Error:", e));
    } catch(e) { console.log("TG Error:", e); }
    delivery:delivery,address:delivery==="pickup"?PICKUP:address,payment:payment,comment:comment,status:"new",
    items:t.ls.map(function(l){return {name:l.p.n,qty:l.q,price:l.p.pr,unit:l.p.u}}),
    subtotal:t.sub,fee:t.fee,total:t.total};
  saveOrder(order);
  writeCart([]);
  document.getElementById("app").innerHTML=vSuccess(order);
  window.scrollTo(0,0);
  updateBadge();
}

function submitTrack(f){
  var d=new FormData(f);
  var num=String(d.get("number")||"").trim().toUpperCase(),ph=String(d.get("phone")||"").trim();
  var digits=ph.replace(/\D/g,"").slice(-10),eb=document.getElementById("trErr"),rb=document.getElementById("trRes");
  err(f,"number",num.length<3?"Введите номер заказа":"");
  err(f,"phone",digits.length<10?"Введите телефон":"");
  if(num.length<3||digits.length<10){eb.style.display="none";rb.innerHTML="";return}
  var o=readOrders().filter(function(x){return x.number===num&&x.phone.replace(/\D/g,"").slice(-10)===digits})[0];
  if(!o){eb.textContent="Заказ не найден. Проверьте номер и телефон — они указаны в подтверждении заказа.";eb.style.display="block";rb.innerHTML="";return}
  eb.style.display="none";
  rb.innerHTML=trackCard(o);
}

function submitLead(f){
  var d=new FormData(f),name=String(d.get("name")||"").trim(),ph=String(d.get("phone")||"").trim();
  err(f,"name",name.length<2?"Укажите имя":"");
  err(f,"phone",ph.replace(/\D/g,"").length<10?"Введите корректный телефон":"");
  if(name.length<2||ph.replace(/\D/g,"").length<10)return;
  document.getElementById("leadWrap").innerHTML='<div style="text-align:center;padding:26px 0">'+
    '<div class="succ-ico">'+ico("#i-check")+'</div><h2 style="margin-bottom:8px">Сообщение отправлено</h2>'+
    '<p class="mut" style="margin:0 0 18px;font-size:14px">Менеджер свяжется с вами в рабочее время. Если вопрос срочный — звоните на 8 800 555-35-35.</p>'+
    '<button class="btn btn-out btn-sm" id="again">Отправить ещё одно</button></div>';
  document.getElementById("again").onclick=function(){render()};
}

document.addEventListener("click",function(e){
  var b=e.target.closest("[data-add]");
  if(!b)return;
  e.preventDefault();
  var id=b.getAttribute("data-add"),p=P.filter(function(x){return x.id===id})[0];
  addToCart(id,1);
  if(p)toast(p.n+" — в корзине");
  b.classList.add("in");
  b.innerHTML='<svg class="i"><use href="#i-check"/></svg>';
});
document.getElementById("brg").addEventListener("click",function(){
  var m=document.getElementById("mnav"),open=m.classList.toggle("open");
  document.getElementById("brgI").innerHTML='<use href="'+(open?"#i-x":"#i-menu")+'"/>';
});
window.addEventListener("hashchange",render);
document.getElementById("yr").textContent=new Date().getFullYear();
render();
// === ИНТЕГРАЦИЯ С TELEGRAM ===
const TG_TOKEN = "9159278260:AAHrTLTca0wQ7u8Eu4Ru5yPcczNwZEOrfho";
const TG_CHAT_ID = "5468112563";

function sendToTelegram(message) {
  fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TG_CHAT_ID, text: message, parse_mode: 'HTML' })
  }).catch(e => console.log("TG Error:", e));
}

// Перехватываем сохранение заказа
const originalSaveOrder = window.saveOrder;
if (typeof originalSaveOrder === 'function') {
  window.saveOrder = function(o) {
    // Сначала отправляем в Телеграм
    const text = `🔥 <b>Новый заказ!</b>\n\n🔢 Номер: ${o.number}\n👤 Имя: ${o.name}\n📞 Телефон: ${o.phone}\n📍 Адрес: ${o.address}\n💰 Сумма: ${o.total} ₽\n\n📦 <b>Состав:</b>\n${o.items.map(i => `• ${i.name} — ${i.qty} ${i.unit}`).join('\n')}`;
    sendToTelegram(text);
    
    // Затем вызываем оригинальную функцию сохранения
    return originalSaveOrder.apply(this, arguments);
  };
}
// ==============================
