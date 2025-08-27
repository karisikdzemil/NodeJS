const Sequelize = require("sequelize");

const sequelize =  new Sequelize('node-complete', 'root', 'ljuljaska!2', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;