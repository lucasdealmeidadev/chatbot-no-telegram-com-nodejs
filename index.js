import 'dotenv/config';
import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg.text);

    bot.sendMessage(chatId, 'Obrigado por sua mensagem (:');
});