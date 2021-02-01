const axios = require('axios');

const token = process.env.TOKEN

const headers = {
    headers: { Authorization: `Bearer ${token}` }
}

module.exports = {
    async getMusic() {
        const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', headers);
        const { data } = response;
        const musicaAtual = `${data.item.album.artists[0].name} - ${data.item.name}`;
        return musicaAtual;
    }
}

