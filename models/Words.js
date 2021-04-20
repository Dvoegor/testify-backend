const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const Words = sequelize.define('crossWords', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  answer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  function: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  method: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  subjectArea: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Words;
