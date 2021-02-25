module.exports = {
  info: {
    name: "strona",
    description: "",
    usage: "",
    aliases: ["str"],
run: async function (client, message, args) {
    message.channel.send({embed: {
        color: 1752220,
        title: "STRONA",
        fields: [{
            name: "Strona FameCraft",
            value: '[-> Kliknij <-](https://famecraft.pl)'
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: '',
          text: ""
        }
      }
     })
}}}