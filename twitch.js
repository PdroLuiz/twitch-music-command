require('dotenv').config();
const tmi = require('tmi.js');
const { getMusic } = require('./getMusic.js');
const NOME_DO_BOT = process.env.NOME_DO_BOT;
const NOME_DO_CANAL_QUE_O_BOT_VAI_FICAR = process.env.NOME_DO_CANAL_QUE_O_BOT_VAI_FICAR;
const O_TOKEN_DO_PASSO_4 = process.env.O_TOKEN_DO_PASSO_4;
const opts = {
    identity: {
    username: NOME_DO_BOT,
    password: O_TOKEN_DO_PASSO_4
    },
    channels: [ NOME_DO_CANAL_QUE_O_BOT_VAI_FICAR ]
};



async function mensagemChegou(alvo, contexto, mensagem, ehBot) {
    mensagem = mensagem.trim();
   
  

    if (mensagem == "!music") {
      const music_name = await getMusic();
      client.say(alvo, music_name);
    }
}


function entrouNoChatDaTwitch(endereco, porta) {
  console.log(`* Bot entrou no endereço ${endereco}:${porta}`);
}


const client = new tmi.client(opts);

// Registra nossas funções
client.on('message', mensagemChegou);
client.on('connected', entrouNoChatDaTwitch);
// Connecta na Twitch:
client.connect();