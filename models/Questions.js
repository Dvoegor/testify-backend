const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

const Questions = sequelize.define("Questions", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  test_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  word_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  answers_qnt: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  right_answers_qnt: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

module.exports = Questions;