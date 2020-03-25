const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./user')
const Dish = require('./dish')

const UserDish = db.define('userDish', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  mealType: {
    type: Sequelize.ENUM(['breakfast', 'lunch', 'dinner']),
    allowNull: false
  }
})

module.exports = UserDish
