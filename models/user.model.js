var Sequelize = require('sequelize');
var sequelize = require('../config/mysql.config');

var User = sequelize.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    usuario: Sequelize.STRING,

    email: Sequelize.STRING,

    rol: Sequelize.ENUM('comun', 'premium')
})


module.exports = {
    User
}