const Sequelize = require('sequelize');
const db = require('../db/pg-db');

module.exports = db.sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  username: {
    type: Sequelize.STRING(20),
    unique: true,
    validate: {
      min: 2,
      max: 20
    }
  },
  phone: {
    type: Sequelize.STRING(20),
    unique: true,
    validate: {}
  },
  password: {
    type: Sequelize.STRING
  }
});
