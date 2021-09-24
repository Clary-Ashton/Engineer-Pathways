// require db connection
const Sequelize = require("sequelize");
const db = require("../../db");
// sequelize table with employee info
module.exports = db.define("User", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  language: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  framework: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  goal: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
});
