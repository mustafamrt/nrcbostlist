const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  

let user = message.mentions.users.first() || message.author  

  

const egehanss = new Discord.MessageEmbed()

 .setColor("RANDOM")

 .setTitle(`${client.user.username}`)

 .setDescription(`> **Bot Ekleme Kuralları**

**1**. Botunuz 10 sunucuya ve 1000 kişiye hizmet vermelidir.

**2**. Botunuzda en az 10 komut bulunmalıdır.

**3**. Botunuzda en fazla 3 hatalı komut bulunmalıdır.

**4**. Renkli ve hızlı haraket eden emojiler bulunmamalıdır.

**5**. Yasaklı kodlar bulunmamalıdır.

**6**. sa-as , spam koruma tarzı tüm komutlar ayarlamalı olmalıdır

> **DBL Yasaklı Komutlar**:

**1**. Disko Rol

**2**. Ailemiz,Top10,Top5

**3**. Herkese-Rol-Ver/Al

**4**. Herkesi Banla/Kickle

**5**. Dm Duyuru

`)


  message.channel.send(egehanss)

  

  

}

  

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['bot-kuralları','bot-kurallari'],

  permLevel: 0

};

exports.help = {

  name: 'kurallar',

  description: 'Botların Kurallarını Listeler.',

  usage: '!kurallar'

}; 