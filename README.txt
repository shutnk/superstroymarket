СуперСтройМаркет — структура проекта

index.html        — только разметка каркаса (шапка, подвал, #app)
css/style.css     — все стили, цвета в :root
js/config.js      — настройки (URL отправки заказов, телефон, доставка). БЕЗ секретов
js/data.js        — каталог, отзывы, услуги (позже заменится на запрос к API)
js/cart.js        — утилиты и корзина (хранит только id и количество)
js/orders.js      — заказы: локальное сохранение + отправка на сервер с повтором
js/app.js         — страницы и роутер
worker/worker.js  — Cloudflare Worker: единственное место, где живёт токен Telegram
img/              — сюда складывайте картинки (logo.png и т.д.)

Установка из Termux (из папки репозитория):
  termux-setup-storage
  unzip -o ~/storage/downloads/ssm.zip -d /tmp/ssm
  cp -r /tmp/ssm/ssm/* .
  git add -A && git commit -m "Новая структура сайта" && git push origin main

Telegram:
  1. В @BotFather: /revoke — выпустить НОВЫЙ токен (старый скомпрометирован).
  2. dash.cloudflare.com → Workers → Create → вставить worker/worker.js.
  3. Settings → Variables: BOT_TOKEN (Secret), CHAT_ID (Secret), ALLOWED_ORIGIN = https://shutnk.github.io
  4. Скопировать URL воркера в js/config.js → ORDER_ENDPOINT, закоммитить.
  Удалите из репозитория tg_code.txt, tg_insert.txt, tg_integration.* — в них старый токен.
