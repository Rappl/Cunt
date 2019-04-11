const klaw = require('klaw');
const path = require('path');

var EVENT_PATH = './events';

module.exports = (client) => {
    klaw(EVENT_PATH).on('data', (item) => {
        let eventFile = path.parse(item.path);
        if (!eventFile.ext || eventFile.ext !== '.js');

        let eventName = eventFile.name.split('.')[0];
        try {
            client.on(eventName, (...args) => require(`${eventFile.dir}${path.sep}${eventFile.base}`)(client, ...args));
            client.log.load('Loaded event', eventName);
        } catch (e) {
            client.log.error(e);
        }
    })
}