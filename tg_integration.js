
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
