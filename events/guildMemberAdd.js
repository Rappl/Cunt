module.exports = (client, member) => {
    client.database.models.user.findOrBuild({
        where: {
            userID: member.id
        }
    }).spread((userModel, initialized) => {
        if(initialized){
            client.log.info('Inserted user');
            return userModel.save();
        }
    })
}