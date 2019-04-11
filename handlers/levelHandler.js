let gottenXPUsers = new Set();
let {RichEmbed} = require('discord.js');

module.exports = async(client, message) => {
    client.database.models.user.findOrBuild({
        where: {
            userID: message.author.id
        }
    }).spread((userModel, initialized) => {
        if(initialized){
            client.log.info('Inserted user');
            return userModel.save();
        }
    })

    let userModel = await client.database.models.user.findOne({
        attributes: ['experience', 'level', 'xpNeededForNextLvl'],
        where: {
            userID: message.author.id
        }
    });

    if(!userModel) return;
    if(message.author.id !== '319535368992980994'){
        if(gottenXPUsers.has(message.author.id)) return;
    }

    let xp = userModel.dataValues.experience;
    let level = userModel.dataValues.level;
    let xpNeededForNextLvl = userModel.dataValues.xpNeededForNextLvl;
    let gottenXP = generateXP(message);

    xp = xp + gottenXP;

    gottenXPUsers.add(message.author.id);
    setTimeout(() => {
        gottenXPUsers.delete(message.author.id);
    }, 20000)

    if(xp >= xpNeededForNextLvl){
        xp = xp - xpNeededForNextLvl;
        level = level + 1;
        xpNeededForNextLvl = Math.floor((Math.pow(1.15, level) * 100));
        message.reply('You have leveled up to level ' + level);

        let levelRole = message.guild.roles.find(role => role.id === '561997100531974166');
        message.member.addRole(levelRole.id)

        let logChannel = message.guild.channels.get('565573813203501066');
        let embed = new RichEmbed()
        .setFooter(`ID: ${message.author.id} • Today at ${formatAMPM(new Date())}`)
        .setDescription(message.author + ' has leveled up to level ' + level +'.')
        .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
        logChannel.send(embed);
    }

    if (level <= 1) {
        let lvl1role = message.guild.roles.find(role => role.id === "561997283642834945");
        message.member.addRole(lvl1role);
    }
    else if (level >= 5) {
        let lvl10role = message.guild.roles.find(role => role.id === "565950194114363392");
        message.member.addRole(lvl10role);
    }
    else if (level >= 10) {
        let lvl10role = message.guild.roles.find(role => role.id === "561997404790980678");
        message.member.addRole(lvl10role);
    }
    else if (level >= 15) {
        let lvl10role = message.guild.roles.find(role => role.id === "565950255317778433");
        message.member.addRole(lvl10role);
    }
    else if (level >= 20) {
        let lvl20role = message.guild.roles.find(role => role.id === "561997466321420327");
        message.member.addRole(lvl20role);
    }
    else if (level >= 25) {
        let lvl20role = message.guild.roles.find(role => role.id === "565950331335344169");
        message.member.addRole(lvl20role);
    }
    else if (level >= 30) {
        let lvl20role = message.guild.roles.find(role => role.id === "561997554414518322");
        message.member.addRole(lvl20role);
    }
    else if (level >= 35) {
        let lvl20role = message.guild.roles.find(role => role.id === "565950375778320405");
        message.member.addRole(lvl20role);
    }
    else if (level >= 40) {
        let lvl20role = message.guild.roles.find(role => role.id === "561997596151775244");
        message.member.addRole(lvl20role);
    }
    else if (level >= 45) {
        let lvl20role = message.guild.roles.find(role => role.id === "565950422502866974");
        message.member.addRole(lvl20role);
    }
    else if (level >= 50) {
        let lvl20role = message.guild.roles.find(role => role.id === "561997693900161106");
        message.member.addRole(lvl20role);
    }

    await client.database.models.user.update({
        experience: xp,
        level: level,
        xpNeededForNextLvl: xpNeededForNextLvl
    },
    {
        where: {
            userID: message.author.id
        },
        fields: ['experience', 'level', 'xpNeededForNextLvl']
    });
}

function generateXP(message) {
    let mArray = message.content.trim().split(' ');
    if (mArray.length < 10) {
        return 5;
    } else if (mArray.length > 10 && mArray.length < 20) {
        return 10;
    } else if (mArray.length > 20) {
        return 15;
    }
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  