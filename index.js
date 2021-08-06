import 'dotenv/config';
import TelegramBot from 'node-telegram-bot-api';
import dialogflow from './dialogflow';
import youtube from './youtube';

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;

    const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);

    let textResponse = dfResponse.text;

    if (dfResponse.intent === 'Treino específico') {
        textResponse = await youtube.searchVideoURL(textResponse, dfResponse.fields.corpo.stringValue);
    }

    bot.sendMessage(chatId, textResponse);
});