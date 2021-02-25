module.exports = {
    info: {
      name: "ping",
      description: "",
      usage: "",
      aliases: ["ping"],
run: async function (client, message, args) {
    const Discord = require('discord.js');

    let pong = new Discord.MessageEmbed()
    .setTitle("🏓 Pong!")
    .setColor('RANDOM')
    .setTimestamp()
    .addField("Ping:", `${m.createdTimestamp - message.createdTimestamp}ms`, true)
    .addField("Ping API:", `${Math.round(client.ws.ping)}ms`, true)
    await message.channel.send(pong)
    m.delete()
}}}