//in bot.js

const { ask } = require("./ai.js"); //import the "ask" function from the "ai.js" file
const { Client, Events, GatewayIntentBits } = require('discord.js'); //v14.6.0
const token = "MTA3ODk4MDM3NjI3OTY1ODQ5Ng.GriKHK.3BJJ4epqpPPa5cPl_th_Agc35t79uGTL38QMiU";

// Create a new client instance
const client = new Client({
  intents:
    [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent]
});

client.once(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, async message => {
  if (message.content.substring(0, 1) === "!") {
    const prompt = message.content.substring(1); //remove the exclamation mark from the message
    const answer = await ask(prompt); //prompt GPT-3
    client.channels.fetch(message.channelId).then(channel => channel.send(answer));
  }
});

// Log in to Discord with your client's token
client.login(token);


