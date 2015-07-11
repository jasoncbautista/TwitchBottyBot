var irc = require('twitch-irc');
var botCredentials = require('./botcredentials');

console.log("bot username", botCredentials.username);

var clientOptions = {
    options: {
        debug: true,
        debugIgnore: ['ping', 'chat', 'action']
    },
    identity: {
            username: botCredentials.username // 'jasonifybot',
        ,   password: botCredentials.oauthtoken //'oauth:62kv5frdz0ukg3to3o2bu02n1kdwrt'
    },
    channels: ['jasonify']
}
var client = new irc.client(clientOptions);

client.connect();

client.addListener('chat', function (channel, user, message) {
    console.log(user.username + ': ' + message);
    if (message.toLowerCase() === '!hello') {
        client.say(channel, 'Hello, ' + user.username + '!');
    }
});
