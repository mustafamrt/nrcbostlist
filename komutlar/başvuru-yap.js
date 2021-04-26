const Discord = require('discord.js');
const db = require('nrc.db');


exports.run = function(client, message, args) {

	let adınız = args[0]
	let yaşınız = args[1]
  let katagori = args[2]

  let basvuru = db.fetch(`basvuruk_${message.guild.id}`)
	let kanal = db.fetch(`başvuru-ekle_${message.guild.id}`)
  let log =   db.fetch(`başvuru-log_${message.guild.id}`)
 
	if(!log) return message.channel.send("Bu komudu kullanmak için başvurulist kanallarının sunucuda ayarlı olması gerekiyor.")
  if(!basvuru) return message.channel.send("Bu komudu kullanmak için başvurulist kanallarının sunucuda ayarlı olması gerekiyor.")
  if(!kanal) return message.channel.send("Bu komudu kullanmak için başvurulist kanallarının sunucuda ayarlı olması gerekiyor.")
  
  if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`)
	if (message.channel.id == kanal) {
    message.delete()
  if (!adınız)return message.channel.send(`:no_entry: Adınızı yazmalısınız`).then(m => m.delete({timeout: 10000}))
  if(isNaN(yaşınız)) return message.channel.send(`:no_entry: Yaşlar rakamdan oluşmalıdır.`).then(m => m.delete({timeout: 10000}))
  if (!yaşınız) return message.channel.send(`:no_entry: Yaşınızı yazmalısınız`).then(m => m.delete({timeout: 10000}))
  
  if (!katagori) return message.channel.send(`:no_entry: Hangi bölümü seçiceksiniz (Kod-Paylaşımcı/Abone-Yetkilisi/Destek-Ekibi)burayı kendinize göre ayarlayınız`).then(m => m.delete({timeout: 10000}))
 
  
  const basvuruuu = new Discord.MessageEmbed()
  .setColor("PURPLE")
  .setDescription(`${message.author} adlı kullanıcı ${katagori} bölümüne yetkili başvuru yaptı `)
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle("Başvuru Geldi!")
  .addField("<:klln:823577811067469844> **•** Başvuran kişinin adı", `\`\`\`${adınız}\`\`\``)
  .addField("<:klln:823577811067469844> **•** Başvuran kişinin yaşı", `\`\`\`${yaşınız}\`\`\``)
  .addField("<:kurallar:823577810488393738> **•** Başvurduğu kategori", `\`\`\`${katagori}\`\`\``)

  client.channels.cache.get(basvuru).send(embed)
  client.channels.cache.get(log).send(basvuruuu)
  message.channel.send(`Yetkili başvuru istek alındı.`)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili-başvuru'],
  permLevel: 0
};

exports.help = {
  name: 'başvuru', 
  description: "Sunucuya başvuru eklemenizi sağlar.",
  usage: 'başvur <adınız> <yaşınız> <katagori>'
};

