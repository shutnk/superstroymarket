#!/data/data/com.termux/files/usr/bin/bash
FILE="index.html"

# Вставляем стили перед закрывающим тегом </style> (он точно есть в оригинале)
sed -i 's|</style>|/* --- Улучшения дизайна --- */\n@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }\n.section > .wrap { animation: fadeInUp 0.8s ease-out forwards; }\n.site-header { background: rgba(25, 51, 74, 0.85) !important; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.1); }\n.pcard { transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease; }\n.pcard:hover { transform: translateY(-8px); box-shadow: 0 24px 48px -12px rgba(21,29,36,0.25) !important; }\n@keyframes pulse-accent { 0% { box-shadow: 0 0 0 0 rgba(232, 130, 42, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(232, 130, 42, 0); } 100% { box-shadow: 0 0 0 0 rgba(232, 130, 42, 0); } }\n.add-btn:hover { animation: pulse-accent 1.5s infinite; }\n</style>|' "$FILE"

# Удаляем только ТОЧНО известные скрипты Base44 (по их уникальным ID), не трогая теги head и body
sed -i '/data-preview-data-env-pin/,/<\/script>/d' "$FILE"
sed -i '/window.__base44_sdk_attach/,/<\/script>/d' "$FILE"

echo "Файл исправлен. Отправляем на GitHub..."
git add index.html
git commit -m "Fix: восстановлен HTML и аккуратно добавлены стили"
git push origin main
