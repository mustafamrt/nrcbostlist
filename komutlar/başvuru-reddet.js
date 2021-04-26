const Discord = require('discord.js');
const db = require('nrc.db');

exports.run = function(client, message, args) {

  let yetkili = db.fetch(`byetkili_${message.guild.id}`)
if (!message.member.roles.cache.has(yetkili)) return message.channel.send('Bu Komutu Kullanamazsın')    
  let başvuruisim = args[0]
  let sahip = args[1]
  let sebep = args.slice(1).join(" ");
  let basvuru = db.fetch(`basvuruk_${message.guild.id}`)
    let kanal = db.fetch(`başvuru-ekle_${message.guild.id}`)
  let log =   db.fetch(`başvuru-log_${message.guild.id}`)
    if(!log) return message.channel.send("Bu komudu kullanmak için başvuru  kanallarının sunucuda ayarlı olması gerekiyor.")
  if(!basvuru) return message.channel.send("Bu komudu kullanmak için başvuru  kanallarının sunucuda ayarlı olması gerekiyor.")
  if(!kanal) return message.channel.send("Bu komudu kullanmak için başvuru  kanallarının sunucuda ayarlı olması gerekiyor.")
  const red = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`<@${başvuruisim}> adlı kişinin yaptığı başvuru reddedildi.\nSebep : ${sebep}\nReddeden yetkili : ${message.author}`)
    
    if (!başvuruisim) return message.channel.send(`:no_entry: başvuranın ID'sini yazmalısın.`).then(m => m.delete({timeout: 10000}))
  if (!sebep) return message.channel.send(`:no_entry: başvuruyu neden onaylamadığını yazmalısın.`).then(m => m.delete({timeout: 10000}))
   
  message.delete()
        client.channels.cache.get(log).send(red);
        message.channel.send(`başvuruu reddettiniz.`).then(m => m.delete({timeout: 10000}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['başvuru-reddet', 'reddet'],
  permLevel: 3
};

exports.help = {
  name: 'başvurureddet', 
  description: "Sunucuya eklenen başvuruu reddeder.",
  usage: 'başvurureddet <başvuru ismi> - <sebep>'
};