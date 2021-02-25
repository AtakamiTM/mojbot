const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "help",
        description: "",
        usage: "[command]",
        aliases: ["commands", "help me", "pls help"]
    },

    run: async function(client, message, args){
        var allcmds = "";

        client.commands.forEach(cmd => {
            let cmdinfo = cmd.info
            allcmds+="`"+client.config.prefix+cmdinfo.name+" "+cmdinfo.usage+"` ~ "+cmdinfo.description+"\n"
        })
        message.channel.send({embed: {
            color: 3066993,
            title: "Lista Komend (-)",
            fields: [{
                name: "MUZYKA (17)",
                value: '`invite, leave, loop, lyrics, nowplaying, pause,\nplay, playlist, queue, remove, resumme, skip,\nsearch, shuffle, skipto, stop, valume`'
              },
              {
                name: 'PRZYDATNE (4)',
                value: '`nakladka, botinfo, ping, strona`'
              },
            ],
            timestamp: new Date(),
            footer: {
              text: "24/7 Music (FC)"
            }
          }
         })
    }}