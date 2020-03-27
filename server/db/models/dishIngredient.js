const Sequelize = require('sequelize')
const db = require('../db')

const DishIngredient = db.define('DishIngredient', {
  dishId: {
    type: Sequelize.INTEGER
  },
  ingredientId: {
    type: Sequelize.INTEGER
  }
})

module.exports = DishIngredient
