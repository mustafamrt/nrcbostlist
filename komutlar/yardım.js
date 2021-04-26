const Discord = require('discord.js');
const db = require("wio.db")
exports.run = async (client, message, args) => {
 if(!args[0]) {
   
const embed = new Discord.MessageEmbed()
    .setAuthor("<:mod2:823577817621987358> Narcos Botlist || Yardım Menüsü", client.user.avatarURL())
   .setColor("#BLUE")
  .setDescription(`
  <:klln:823577811067469844> **Kullanıcı Komutları
 
> <:uye:823577810383667200> **• \`!botekle\` => Botliste Bot Eklersiniz.**

> <:uye:823577810383667200> **• \`!say\` => Sunucuyu Sayar.**
 
<:mod2:823577817621987358> **Yetkili Komutları**
  
> <:uye:823577810383667200> **• \`!kurallar\` => Botlist Kurallarını Atar.**

> <:uye:823577810383667200>  **• \`!botlist-ayar\` Ayarlama Menüsünü Atar.**

> <:uye:823577810383667200> **• \`!sunucu-kur\` Botlist Sunucusu Kurar.**

> <:uye:823577810383667200>  **• \`!botonayla\` Bot Onaylarsınız.**

> <:uye:823577810383667200>  **• \`!botreddet\` Bot Rededersiniz.**

\`\`\`Bu Altyapı Narcos Code Ye Aittir. Tüm Abonelere İyi Kullanımlar Dileriz.\`\`\`
  
  `)   
  .addField(`» Bağlantı Adresleri`, `[**Narcos Code**](https://discord.gg/mE9GwcnMwC) **•** [**YouTube Kanalı**](https://www.youtube.com/channel/UCD9s0x7OrF3XPmmV7AlBrhA) **•**`)        .setFooter(`🔵 NarcosCode Sizler İçin Burda!`, client.user.avatarURL())

  message.channel.send(embed)

}else {

}
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım', 
  description: '',
  usage: ''
};