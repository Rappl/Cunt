const chalk = require('chalk');

module.exports = {
    info: function(message){
        var date = new Date();
        var dateString = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return console.log(chalk`[${dateString}] {bgBlue.black  INFO } ${message}`);
    },

    load: function(message, load){
        var date = new Date();
        var dateString = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return console.log(chalk`[${dateString}] {bgWhite.black  LOAD } ${message}: {yellow ${load}}`); 
    },

    succes: function(message){
        var date = new Date();
        var dateString = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return console.log(chalk`[${dateString}] {bgGreen.black  SUCCES } ${message}`);
    },

    error: function(message){
        var date = new Date();
        var dateString = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return console.log(chalk`[${dateString}] {bgRed.black  ERROR } ${message}`);
    },

    warning: function(message){
        var date = new Date();
        var dateString = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return console.log(chalk`[${dateString}] {bgYellow.black  ERROR } ${message}`);
    }
}