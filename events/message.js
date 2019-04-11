const handleCommand = require('../handlers/commandHandler');
const handleLevels = require('../handlers/levelHandler');

module.exports = (client, message) => {
    if(message.author.bot) return;

    handleLevels(client, message);
    handleCommand(client, message)
}