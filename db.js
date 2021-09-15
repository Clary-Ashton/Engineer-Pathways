const Sequelize = require("sequelize");
const db = new Sequelize("eps", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
global.db = db;
