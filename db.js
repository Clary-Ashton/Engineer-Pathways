const Sequelize = require("sequelize");
const db = new Sequelize("eps_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
global.db = db;
