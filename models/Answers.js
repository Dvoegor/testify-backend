const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

const Answers = sequelize.define("Answers", {
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
  answer: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Answers;