const Sequelize = require('sequelize')
const db = require('../db')

const UserDish = db.define('userDish', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  mealType: {
    type: Sequelize.ENUM(['Breakfast', 'Lunch', 'Dinner', 'Snack']),
    allowNull: false
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    defaultValue: new Date()
  }
})

module.exports = UserDish
