const User = require('./user')
const Dish = require('./dish')
const Ingredient = require('./ingredient')
const UserDish = require('./userDish')

// UserDish.belongsTo(User, {foreignKey: 'userId'})
// UserDish.belongsTo(Dish, {foreignKey: 'dishId'})

User.belongsToMany(Dish, {through: UserDish}) //'user-dish'
Dish.belongsToMany(User, {through: UserDish}) //'user-dish'

Dish.belongsToMany(Ingredient, {through: 'dish-ingredient'})
Ingredient.belongsToMany(Dish, {through: 'dish-ingredient'})

User.belongsToMany(Ingredient, {through: 'user-ingredient'})
Ingredient.belongsToMany(User, {through: 'user-ingredient'})

module.exports = {
  User,
  Dish,
  Ingredient,
  UserDish
}
