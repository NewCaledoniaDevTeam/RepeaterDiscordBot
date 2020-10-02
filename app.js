const Discord = require("discord.js");
const client = new Discord.Client();
require("./server.js");

client.login("TOKEN");
client.on("ready", () =>
  console.log(`${client.user.tag} has been successfully turned on!`)
);

//CUSTOM PLAYING STATUS

const statusList = [
  { msg: "Minecraft: Bedrock Edition", type: "PLAYING" },
  { msg: "the Slots", type: "PLAYING" },
  { msg: "Minecraft: Xbox One Edition", type: "PLAYING" },
  { msg: "Minecraft: Java Edition", type: "PLAYING" },
  { msg: "Minecraft Dungeons", type: "PLAYING" },
  { msg: "Minecraft: Windows 10 Edition", type: "PLAYING" }
];

setInterval(async () => {
  const index = Math.floor(Math.random() * statusList.length + 1) - 1;
  await client.user.setActivity(statusList[index].msg, {
    type: statusList[index].type
  });
}, 60000);

client.on("message", async message => {
  var prefix = "$";

//code before the pause
setTimeout(function(){
    //do what you need here
}, 2000);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (command === "repeater") {
    let uReply = args[0];
    var name = uReply;
    if (!uReply)
      return message.channel.send(`Please say command after ${prefix}repeater`);
	var i;
	for (i = 0; i < 10000; i++) {
	setTimeout(function(){
	message.channel.send(`${name}`);
	console.log(i);
	}, 6000);
		}
  }

  //help
  if (message.content.startsWith(`^help`)) {
    const embed = new Discord.RichEmbed()
      .setTitle("help menu")
      .setThumbnail(client.user.avatarURL)
      .addField(`**${prefix}repeater**`, `repeats after the ${prefix}repeater`)
      .setImage("https://i.imgur.com/57C4nBC.jpg")
	  .setTimestamp()
	  

    message.channel.send(embed);
  }
});