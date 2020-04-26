const { Util } = require("discord.js");
const { YOUTUBE_API_KEY } = require("../config.json");
const ytdl = require("ytdl-core");
const YoutubeAPI = require("simple-youtube-api");
const youtube = new YoutubeAPI(YOUTUBE_API_KEY);
const { play } = require("../system/music.js") 
module.exports = {
  name: "ses",
  description: "Müzik Sesi Ayarla",
  async execute(client, message, args) {
    //FIRST OF ALL WE WILL ADD ERROR MESSAGE AND PERMISSION MESSSAGE

    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("SES KANALINDA OLMALISINIZ: /");
    }

    //WE WILL ADD PERMS ERROR LATER :(
    const serverQueue = message.client.queue.get(message.guild.id);

    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 20,
      playing: true
    };

    let songData = null;
    let song = null;
    
    
  }
};
