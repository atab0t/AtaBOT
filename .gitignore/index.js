const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`AtaBOT est on !`);
});

client.on('message', msg => {
  if (msg.content === '>ping') {
    msg.channel.send('_pong !_');
  }
});

client.on('message', msg => {
    if (msg.content === '>help') {
      msg.channel.send('**====** _AtaBOT_ **====**');
      msg.channel.send('**>ping **: Bah pong...');
      msg.channel.send('**================**');
    }
  });
client.on('message', msg => {
 if (msg.content === '>annonce') {
      msg.channel.send('**ANNONCE** >> _Je vais fermé ce discord pour plusieurs raisons à part, mais je vous invite à rejoindre celui ci si vous voulez ;)_ > https://discord.gg/4fK5cPK <');
    }
  });

client.on('ready', function() {
  client.user.setAvatar('./avatar.png')
    .then(() => console.log('Avatar mis en place avec succès'))
    .catch(console.error);
  client.user.setGame('AtaBOT V0.3')
    .catch(console.error);
});    

client.login('NDEwNDU2NTc0NDQ5MDI1MDI0.DVtjIw.zpyIzjfkXvho9-k5HFFzN-rcvIA');
