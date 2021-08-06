import 'dotenv/config';
import YouTube from 'youtube-node';

const youtube = new YouTube();
youtube.setKey(process.env.YOUTUBE_KEY);

export default {
    async searchVideoURL(message, queryText) {
        return new Promise((resolve, _) => {
            youtube.search(`Exercício em casa para ${queryText}`, 2, function (error, result) {
                if (error) {
                    resolve('Não foi possível encontrar um vídeo no momento, por favor tente mais tarde');
                } else {
                    const videoIds = result.items.map((item) => item.id.videoId).filter(item => item);
                    const youtubeLinks = videoIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}`).join(', ');

                    resolve(`${message} ${youtubeLinks}`);
                }
            });
        });
    }
}
