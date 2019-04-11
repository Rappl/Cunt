const Discord = require('discord.js');
const Sequelize = require('sequelize');
const CUNT = new Discord.Client();

CUNT.credentials = require('./settings/credentials.json');
CUNT.configurations = require('./settings/configurations.json');
CUNT.log = require('./handlers/logHandler');
CUNT.commands = new Discord.Collection();
CUNT.database = new Sequelize(CUNT.credentials.database.URI, {
    logging: false
});

CUNT.database.authenticate().then(() => {
    CUNT.log.info('Database connected!');

    require('./models/model.js')(Sequelize, CUNT.database);
});

require('./handlers/eventHandler')(CUNT);
require('./handlers/moduleHandler')(CUNT);

CUNT.login(CUNT.credentials.token);

