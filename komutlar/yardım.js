const Discord = require("discord.js")

exports.run = async (client, message, args) => {


const embed = new Discord.MessageEmbed()
.addField("Yardım Menüsü", `
 ╔════════════════◥◣❖◢◤═════════════════╗
 ║
 ║<:uye:823577810383667200> **•** \`!başvuru-ayar\` ➡ **Başvuru ayarlarını yaparsınız.**
 ║<:uye:823577810383667200> **•** \`!başvuru-onay\` ➡ **Başvuru yapan birinin başvurusunu onaylarsınız.**
 ║<:uye:823577810383667200> **•** \`!başvuru-reddet\` ➡ **Başvuru yapan birinin başvurusunu reddedersiniz.**
 ║<:uye:823577810383667200> **•** \`!başvuru\` ➡ **Başvuru yaparsınız.**
 ║
 ╚════════════════◥◣❖◢◤═════════════════╝
 \`\`\`Altyapı Narcos Code'ye Aittir.\`\`\`
 `);



message.channel.send(embed)
 



}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['help'],
    permLevel: 0
}

exports.help = {
    name: 'yardım',
    description: 'Yardım menüsü.',
    usage: 'yardım'
}