module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - There is no music being played on this server !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - You are not connected in any voice channel !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - I am not able to join your voice channel, please check my permissions !`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} is not available in your country! Skipping...`);
            break;
        case 'MusicStarting':
            message.channel.send(`The music is starting... please wait and retry!`);
            break;
        default:
            message.channel.send(`${client.emotes.music} - Maybe You See A Bug Pls Dm NoLife#4680 Or Join /n https://discord.gg/kWkrbdDp3U `);
    };
};
