// Cloudflare Worker: принимает заказ с сайта и отправляет в Telegram.
// Секреты (Settings → Variables → Secrets): BOT_TOKEN, CHAT_ID. Переменная: ALLOWED_ORIGIN = https://shutnk.github.io
const esc = s => String(s ?? "").replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
const cut = (s, n) => String(s ?? "").slice(0, n);
const rub = n => new Intl.NumberFormat("ru-RU").format(Math.round(Number(n) || 0)) + " ₽";

export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "";
    const cors = {
      "Access-Control-Allow-Origin": origin === env.ALLOWED_ORIGIN ? origin : "null",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin",
    };
    const reply = (status, body) => new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (req.method !== "POST") return reply(405, { ok: false });
    if (origin !== env.ALLOWED_ORIGIN) return reply(403, { ok: false });

    let d;
    try { d = await req.json(); } catch { return reply(400, { ok: false }); }
    if (!d || String(d.phone || "").replace(/\D/g, "").length < 10 || String(d.name || "").trim().length < 2) {
      return reply(400, { ok: false, error: "invalid" });
    }

    let text;
    if (d.type === "order" && Array.isArray(d.items) && d.items.length && d.items.length <= 50) {
      const items = d.items.map(i => `• ${esc(cut(i.name, 80))} × ${Number(i.qty) || 0} ${esc(cut(i.unit, 10))}`).join("\n");
      text = `🔥 <b>Новый заказ</b>\n\n🔢 ${esc(cut(d.number, 20))}\n👤 ${esc(cut(d.name, 80))}\n📞 ${esc(cut(d.phone, 30))}\n✉️ ${esc(cut(d.email, 80))}\n` +
        `📍 ${esc(cut(d.address, 200))}\n💳 ${esc(cut(d.payment, 20))}\n\n${items}\n\n🚚 Доставка: ${rub(d.fee)}\n💰 <b>Итого: ${rub(d.total)}</b>` +
        (d.comment ? `\n\n💬 ${esc(cut(d.comment, 500))}` : "");
    } else if (d.type === "lead") {
      text = `📩 <b>Сообщение с сайта</b>\n\n👤 ${esc(cut(d.name, 80))}\n📞 ${esc(cut(d.phone, 30))}\n✉️ ${esc(cut(d.email, 80))}\n\n💬 ${esc(cut(d.message, 1000))}`;
    } else {
      return reply(400, { ok: false, error: "type" });
    }

    const r = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: env.CHAT_ID, text, parse_mode: "HTML" }),
    });
    return reply(r.ok ? 200 : 502, { ok: r.ok });
  },
};
