const User = require('./user')
const Dish = require('./dish')
const Ingredient = require('./ingredient')
const UserDish = require('./userDish')
const DishIngredient = require('./dishIngredient')

Dish.belongsToMany(Ingredient, {through: DishIngredient})
Ingredient.belongsToMany(Dish, {through: DishIngredient})

UserDish.belongsTo(User, {foreignKey: 'userId'}) //, through: UserDish
UserDish.belongsTo(Dish, {foreignKey: 'dishId'}) //, through: UserDish

module.exports = {
  User,
  Dish,
  Ingredient,
  UserDish,
  DishIngredient
}
