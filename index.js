
const fs = require('fs');
const discord = require('discord.js');
const keepAlive = require("./server")
const client = new discord.Client({ disableMentions: 'everyone' });
const disbut = require("discord-buttons");

const { Player } = require('discord-player');
const Discord = require("discord.js");
const { config } = require('process');

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();
require('discord-buttons')(client);

fs.readdirSync('./commands').forEach(dirs => {
  const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

  for (const file of commands) {
    const command = require(`./commands/${dirs}/${file}`);
    console.log(`Loading command ${file}`);
    client.commands.set(command.name.toLowerCase(), command);
  };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
  console.log(`Loading discord.js event ${file}`);
  const event = require(`./events/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
  console.log(`Loading discord-player event ${file}`);
  const event = require(`./player/${file}`);
  client.player.on(file.split(".")[0], event.bind(null, client));
};
//making embeds
//==============================================================================
let helpEmbed = new Discord.MessageEmbed()
  .setTitle(" Help Panel ")
  .setColor("#060000")
  .setDescription("Starssss-Music.")
  .addField(
    "Music:",
    "`clear-queue`, `filter`, `loop`, `nowplaying`, `pause`, `play`, `queue`, `resume`, `search`, `shuffle`, `skip`, `stop`, `volume`, `w-filters`")
  .setFooter("BOT DEVELOPERS: Nolife | Prefix: -")
let filterEmbed = new Discord.MessageEmbed()
  .setTitle("Help Panel")
  .setColor("#060000")
  .setDescription("Starssss-Music.")
  .addField(
    "Filters:",
    "`8D` `Haas` `Treble` `Vibrato` `Karaoke` `Mcompand` `Subboost` `Vaporwave` `Normalizer` `Gate` `Phaser` `Tremolo` `Reverse` `Flanger` `Pulsator` `Bassboost` `Nightcore` `Surrounding`")
  .setFooter("BOT DEVELOPERS: Nolife | Prefix: -")
//making buttons again
//==========================================================================================================================================
let button1 = new disbut.MessageButton()
  .setStyle('blurple')
  .setLabel('Music')
  .setID("Music1")
  .setEmoji('874333312846549063');
let button2 = new disbut.MessageButton()
  .setStyle('blurple')
  .setLabel('Filters')
  .setEmoji('866155255485825035')
  .setID("Filter2");
let buttoninv = new disbut.MessageButton()
  .setStyle('url')
  .setLabel('Invite Me')
  .setURL("https://discord.com/oauth2/authorize?client_id=879252959400181770&permissions=137484495680&scope=bot%20applications.commands");
let buttonsupport = new disbut.MessageButton()
  .setStyle('url')
  .setLabel('Support Server')
  .setURL("https://discord.gg/vBXB4UaK");
//Making Rows
//====================================================================================================================================================
let row1 = new disbut.MessageActionRow()
  .addComponent(buttoninv)
  .addComponent(button1)
  .addComponent(button2)
  .addComponent(buttonsupport)
//Button Handler
//==================================================================================================================================================
client.on("clickButton", async (button) => {
  if (button.id === "Music") {
    button.message.edit({
      embed: helpEmbed,
      component: row1,

    });

  } else if (button.id === "Filter") {

    button.message.edit({
      embed: filterEmbed,
      component: row1,
    });
  } else if (button.id === "Filter2") {

    button.message.edit({
      embed: filterEmbed,
      component: row1,
    });
  }else if (button.id === "Music1") {

    button.message.edit({
      embed: helpEmbed,
      component: row1,
    });
  }
})
//====================================================================================================================================================
keepAlive()
client.login(ODc5MjUyOTU5NDAwMTgxNzcw.YSNCIQ.ehknDWHyrZ0qXX6c_SByyD7NyIo)
