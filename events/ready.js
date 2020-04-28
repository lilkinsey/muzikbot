const Moment = require('moment')
const Discord = require('discord.js')
let prefix = 'BURAYA BOTUN PREFİXİ'
module.exports = client => {
  
  const aktiviteListesi = [
    `${prefix}yardım | ${client.guilds.size} sunucudan ${client.users.size} kullanıcıya hizmet veriyoruz!`,
    'Yazı 1',
    'Yazı 2',
    'Yazı 3'
  ]

  client.user.setStatus('online')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 7000)
}

