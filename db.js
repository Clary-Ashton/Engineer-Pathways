const Sequelize = require("sequelize");
const db_config = {
  database: "eps",
  username: "root",
  password: "",
  host: "localhost",
  dialect: "mysql",
};
const db = new Sequelize(process.env.JAWSDB_URL || db_config, {
  query: { raw: true },
});

module.exports = db;
global.db = db;
