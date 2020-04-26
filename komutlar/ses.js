const Discord = require('discord.js');
exports.run = (client, message, args, ops) => {
    message.delete()
  
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send("Çalan Bir Müzik Bulunamadı.!");
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Üzgünüm!");

  if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send("Lütfen Bir Sayı Giriniz. 0-200 Arasından.")

  fetched.dispatcher.setVolume(args[0]/100);
  message.channel.send(`Ses Başarı İle Değiştirildi ${fetched.queue[0].songTitle} ve ${args[0]}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vol', 'volume'],
  permlevel: 4
};

exports.help = {
  name: 'ses',
  description: 'Bir kullanÄ±cÄ±ya Ã¶zel mesaj yollar.',
  usage: 'ses'
};