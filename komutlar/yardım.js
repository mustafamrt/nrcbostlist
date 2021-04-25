const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
   const filter = (reaction, user) => {
  return ["👤","🎮","📚","💡"].includes(reaction.emoji.name) && user.id === message.author.id && reaction.users.remove(message.author.id);
};

  const yardım = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} - Tarafından İstendi`)
      .setColor("PURPLE")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`
  **━━━━━━ Yardım Menüsü ━━━━━━**

> ━ **Gelişmiş Yardım Menüsü:**
> ━ **Kullanıcı Komutlarını Görmek İçin: 👤 Emojisine Basınız.**
> ━ **Botlist Komutlarını Görmek İçin: 🎮 Emojisine Basınız.**
> ━ **Moderasyon Komutlarını Görmek İçin: 📚 Emojisine Basınız.**
> ━ **Ana Menüye Gitmrk İçin: 💡 Emojisine Basınız.**
  `)
 var menü = await message.channel.send(yardım)
 const collector = menü.createReactionCollector(filter, { time: 99999 });
  let emojiler = ["👤","🎮","📚","💡"]
  await menü.react(emojiler[0])
  await menü.react(emojiler[1])
  await menü.react(emojiler[2])
  await menü.react(emojiler[3])
collector.on('collect', (reaction, user) => {

  if(reaction.emoji.name == "👤") {
    const croxy1 = new Discord.MessageEmbed()
      .setColor("PURPLE")
      .setDescription(`
      **━━━━━━ Kullanıcı Komutları ━━━━━━**
      
      **━ Kullanıcı Komutları Herkesin Kullanabilceği Komutlarıdır.**
      
    > **━ \`!yardım\` **= Yardım Menüsünü Gösterir.**
    > **━ \`!say\` **= Sunucuyu Sayar.**
      `)
  .setThumbnail(client.user.avatarURL())
    menü.edit(croxy1)
  } 
  if(reaction.emoji.name == "🎮") {
       const botlistembed = new Discord.MessageEmbed()
         .setColor("PURPLE")
         .setDescription(`
         **━━━━━━ Botlist Komutları ━━━━━━**
         
         **━ Yetkili Komutları**
         
       > **━ \`!bot-kuralları\` **= Kuralları Atar.**
       > **━ \`!botlist-ayar\` **= Ayarları Atar.**
       > **━ \`!bot-onayla\` **= Eklenen Botu Onaylarsınız.**
       > **━ \`!bot-reddet\` **= Eklenen Botu Rededersiniz.**

         **━ Kullanıcı Komutları**

       > **━ \`!bot-ekle\` **= Bot Eklersiniz.**   
         `)
  .setThumbnail(client.user.avatarURL())
    menü.edit(botlistembed)
  }
  if(reaction.emoji.name == "📚") {
    const croxy = new Discord.MessageEmbed()
      .setColor("PURPLE")
      .setDescription(`
      **━━━━━━ Moderasyon Komutları ━━━━━━**
      
      **━ Ban Sistemi**
      
    > **━ \`!ban @üye\` **= Etiketlediğin Kişiyi Banlarsnız.**
    > **━ \`!ban-affı\` **= Ban Affı.**
    > **━ \`!ban-log\` **= Ban Logu Ayarlarsınız.**
    > **━ \`!ban-sorgu @üye\` **= Etiketlediğin Kişinin Ban Geçmişine Bakarsınız.**
    > **━ \`!ban-yetkilirol\` **= Ban Yetkili Rolünü Ayarlarsınız.**

      **━ Kick Sistemi**

    > **━ \`!kick @üye\` **= Etiketlediğin Üyeyi Kicklersin.**
    > **━ \`!kick-log\` **= Kick Logunu Ayarlarsınız.**
    > **━ \`!kick-yetkilirol\` **= Kick Yetkili Rolünü Ayarlarsınız.**
    > **━ \`!kick @üye\` **= Etiketlediğin Üyeyi Kicklersin.**

      **━ Diğer Mod Komutları**
    > **━ \`!kanal-kilit\` **= Olduğun Kanalı Kilitlersin.**
    > **━ \`!sunucu-kur\` **= Sunucu Kurarsınız.**
      `)
.setThumbnail(client.user.avatarURL())
 menü.edit(croxy)
}
 if(reaction.emoji.name == "💡") {
 menü.edit(yardım)
  }
});

collector.on('end', collected => {
  console.log(`Collected ${collected.size} items`);
});

};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['help'],
 permLevel: 0,
};

exports.help = {
 name: 'yardım',
 description: '',
 usage: ''
};