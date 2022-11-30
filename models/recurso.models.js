var Sequelize = require('sequelize');
var sequelize = require('../config/mysql.config');

var Recursos = sequelize.define('recursos', {
    idRecurso: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    mensaje: Sequelize.TEXT,

})


module.exports = {
    Recursos
}