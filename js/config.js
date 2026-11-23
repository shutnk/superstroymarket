/* Настройки сайта. Здесь НЕТ секретов: токен бота живёт только в Worker (см. worker/README). */
window.SSM = window.SSM || {};
SSM.config = {
  // URL вашего Cloudflare Worker (или будущего API на VPS). Пока пусто — заказы
  // сохраняются только в браузере и в Telegram не уходят.
  ORDER_ENDPOINT: "",
  PHONE: "8 800 555-35-35",
  PHONE_HREF: "+78005553535",
  FREE_DELIVERY_FROM: 50000,
  DELIVERY_FEE: 1500,
  PICKUP_ADDRESS: "Самовывоз, Москва, ул. Строительная, 15",
  // Папка с картинками. Сейчас — внешний хост Base44; скачайте файлы в img/ и поменяйте на "img/"
  IMG: "https://media.base44.com/images/public/6afe0fd83210e28099b4ebb7/"
};
