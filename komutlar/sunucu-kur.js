const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

const prefix = ayarlar.prefix


exports.run = async (client, message, args) => {

if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.discordapp.com/attachments/835819007101763585/835827864347082762/0c8ef551-5187-48a8-9daf-f2cc35630f21_yoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`>  \`${prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.discordapp.com/attachments/835819007101763585/835827431839236136/unknown.png'));

message.channel.send(new Discord.MessageEmbed()

.setTitle('Botlist Sunucusu')

.setThumbnail('https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp?size=512')

.setFooter(`Ping: ${client.ws.ping.toFixed(0)}`, client.user.avatarURL({dynamic: true}))

.setDescription(`${message.author} **Sunucunun** kurulmasını onaylıyor musun?`)).then(resulter => {

resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };

const yes = resulter.createReactionCollector(yesFilter, { time: 0 });

const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };

const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {

message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' Sunucular Kuruluyor!'));

message.guild.channels.cache.forEach(a => a.delete());

message.guild.roles.create({ data: { name: 'Kurucu' }, reason: 'ayn' }).then(role => {

role.setPermissions(['ADMINISTRATOR']);

role.setColor('#070719');

});

message.guild.roles.create({ data: { name: 'Yönetici' }, reason: 'ayn' }).then(role => {

role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'KICK_MEMBERS', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);

role.setColor('#3b0b0b');

});

message.guild.roles.create({ data: { name: 'Üye' }, reason: 'ayn' }).then(s => s.setColor('#00ff40'))

message.guild.roles.create({ data: { name: 'Botlar' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))

message.guild.channels.create('📌・BİLGİLENDİRME', {type: 'category'}).then(parent => {

message.guild.channels.create('📋・kurallar', {type: 'text'}).then(c => c.setParent(parent.id));

message.guild.channels.create('📢・duyurular', {type: 'text'}).then(c => c.setParent(parent.id));

message.guild.channels.create('🚀・boost', {type: 'text'}).then(c => c.setParent(parent.id));

});

message.guild.channels.create('📌・GENEL', {type: 'category'}).then(parent => {

message.guild.channels.create('🗨️・sohbet', {type: 'text'}).then(c => c.setParent(parent.id));

message.guild.channels.create('📸・foto-chat', {type: 'text'}).then(c => c.setParent(parent.id));

message.guild.channels.create('🤖・bot-komut', {type: 'text'}).then(c => c.setParent(parent.id));

});

message.guild.channels.create('📌・BOT-LIST', {type: 'category'}).then(parent => {

message.guild.channels.create('🤖・bot-kuralları', {type: 'text'}).then(a => a.setParent(parent.id));

message.guild.channels.create('🤖・bot-ekle', {type: 'text'}).then(a => a.setParent(parent.id));

message.guild.channels.create('🤖・bot-log', {type: 'text'}).then(a => a.setParent(parent.id));

message.guild.channels.create('🤖・bot-test', {type: 'text'}).then(a => a.setParent(parent.id));

});

message.guild.channels.create('📌・LOG', {type: 'category'}).then(parent => {

message.guild.channels.create('🗳️・sayaç', {type: 'text'}).then(c => c.setParent(parent.id));

message.guild.channels.create('📊・giriş-cıkış', {type: 'text'}).then(c => c.setParent(parent.id));

});

});

no.on('collect', async reaction => {

resulter.delete();

});

})

};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['sk'],

  permLevel: 0

}

exports.help = {

  name: 'sunucu-kur'

};