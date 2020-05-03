const Discord = require("discord.js");

module.exports = {
  name: "durdur",
  description: "şarkıyı duraklat",
  execute (client, message, args) {
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(
      ` Müziği Durdurmayı Onaylıyormusunuz?`
    )
  .setFooter(client.user.username, client.user.avatarURL)
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `İşlem onaylandı! Müzik Durduruldu.`
        );

          const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("SES KANALINDA OLMALISINIZ: /");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Duraklayabildiğim hiçbir şey çalmıyor");
    }
    
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      
      return message.channel.send("✅ | Çalmakta Olan Şarkıyı Duraklattı")
  }
      }
    });
  }); 
  }
}
