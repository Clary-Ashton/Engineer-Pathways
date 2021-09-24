"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     */

    await queryInterface.createTable("users", {
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
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     */
    await queryInterface.dropTable("users");
  },
};
