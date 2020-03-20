const User = require('./user')
const Dish = require('./dish')
const Ingredient = require('./ingredient')

User.belongsToMany(Dish, {through: 'user-dish'})
Dish.belongsToMany(User, {through: 'user-dish'})

Dish.belongsToMany(Ingredient, {through: 'dish-ingredient'})
Ingredient.belongsToMany(Dish, {through: 'dish-ingredient'})

User.belongsToMany(Ingredient, {through: 'user-ingredient'})
Ingredient.belongsToMany(User, {through: 'user-ingredient'})

module.exports = {
  User,
  Dish,
  Ingredient
}
