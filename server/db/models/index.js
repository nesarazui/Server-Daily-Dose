const User = require('./user')
const Dish = require('./dish')
const Ingredient = require('./ingredient')
const UserDish = require('./userDish')
const DishIngredient = require('./DishIngredient')

UserDish.belongsTo(User, {foreignKey: 'userId', through: UserDish})
UserDish.belongsTo(Dish, {foreignKey: 'dishId', through: UserDish})

// DishIngredient.belongsTo(Dish, {foreignKey: 'dishId', through: DishIngredient})
// DishIngredient.belongsTo(Ingredient, { foreignKey: 'ingredientId', as: 'DishIngre1', through: DishIngredient})

// User.belongsToMany(Dish, { through: UserDish}) //'user-dish'
// Dish.belongsToMany(User, { through: UserDish}) //'user-dish'
// Dish.hasMany(UserDish)

Dish.belongsToMany(Ingredient, {as: 'DishIngre1', through: DishIngredient})
Ingredient.belongsToMany(Dish, {as: 'DishIngre2', through: DishIngredient})

// User.belongsToMany(Ingredient, {through: 'user-ingredient'})
// Ingredient.belongsToMany(User, {through: 'user-ingredient'})

module.exports = {
  User,
  Dish,
  Ingredient,
  UserDish,
  DishIngredient
}
