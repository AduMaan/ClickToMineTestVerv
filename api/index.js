// Get the Telegram bot token from the environment variable
const token = process.env.TELEGRAM_BOT_TOKEN;

// Initialize the bot
const bot = new TelegramBot(token, { polling: true });

// Handle /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const gameLink = "https://adumaan.github.io/ClickToMineTest/";

    bot.sendMessage(chatId, `Welcome! Play the game here: [ClickToMineTest](${gameLink})`, { parse_mode: 'Markdown' });
});

// Vercel serverless function (required)
module.exports = (req, res) => {
    res.status(200).send('Bot is running');
};
