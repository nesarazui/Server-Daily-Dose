const Sequelize = require('sequelize')
const db = require('../db')
const Ingredient = require('./user')
const Dish = require('./dish')

const DishIngredient = db.define('DishIngredient', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
})

module.exports = DishIngredient
