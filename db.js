const Sequelize = require("sequelize");
const db_config = {
  database: "eps",
  username: "root",
  password: "",
  host: "localhost",
  dialect: "mysql",
};
 
const db = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL, {
      query: { raw: true },
    })
  : new Sequelize(db_config.database, db_config.username, db_config.password, {
      host: db_config.host,
      dialect: db_config.dialect,
      query: { raw: true },
    });
 
module.exports = db;
global.db = db;
