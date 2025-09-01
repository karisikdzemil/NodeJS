const Sequelize = require("sequelize");

const sequelize = new Sequelize("ToDo", "root", "ljuljaska!2", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
