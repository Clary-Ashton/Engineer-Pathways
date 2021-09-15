const Sequelize = require("sequelize");
const db = require("../../db");

module.exports = db.define("User", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  language: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  framework: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  goal: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});
