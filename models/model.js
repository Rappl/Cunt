module.exports = (Sequelize, database) => {
    const Guild = database.define('guild', {
        guildID: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        prefix: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: '!'
        }
    })

    const User = database.define('user', {
        userID: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        experience: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        level: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        xpNeededForNextLvl: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 100
        },
        coins: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    })

    database.sync();
    return database.models;
}