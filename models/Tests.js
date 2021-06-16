const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

const Tests = sequelize.define("Tests", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  profile_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  test_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  test_link: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Tests;