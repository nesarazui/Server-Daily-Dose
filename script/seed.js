'use strict'
const db = require('../server/db')
const {User} = require('../server/db/models')
const {Dish} = require('../server/db/models')
const {Ingredient} = require('../server/db/models')
const {UserDish} = require('../server/db/models')
const {DishIngredient} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'cody@email.com',
      password: '123',
      name: 'Cody',
      sex: 'male',
      dietaryPreference: 'vegan'
    }),
    User.create({
      email: 'murphy@email.com',
      password: '123',
      name: 'Murphy',
      sex: 'male',
      dietaryPreference: 'keto'
    })
  ])

  const dishes = await Promise.all([
    Dish.create({
      name: 'Taco', //
      dietaryType: ['dairy-free'],
      imgUrl: '', //
      mealTypes: 'lunch', //
      nutrition: 'insert nutrition info here'
    }),
    Dish.create({
      name: 'Chia Seed Pudding', //
      dietaryType: ['dairy-free', 'gluten-free', 'vegan'],
      imgUrl: '', //
      mealTypes: 'breakfast', //
      nutrition: 'insert nutrition info here'
    })
  ])

  const ingredients = await Promise.all([
    Ingredient.create({
      ingredientName: 'Soy Milk', //
      dietType: ['dairy-free', 'gluten-free', 'vegan', 'vegetarian'],
      nutrition: 'insert nutrition info here',
      portionSize: '1 cup' //['1', 'cup']
    }),
    Ingredient.create({
      ingredientName: 'Chia Seeds', //
      dietType: ['dairy-free', 'gluten-free', 'vegan', 'vegetarian'],
      foodType: ['seed'],
      nutrition: 'insert nutrition info here',
      portionSize: '4 tbsp' //['4', 'tbsp']
    })
  ])

  const dishIngredients = await Promise.all([
    DishIngredient.create({
      dishId: 1,
      ingredientId: 1
    }),
    DishIngredient.create({
      dishId: 1,
      ingredientId: 2
    })
  ])

  const userDishes = await Promise.all([
    UserDish.create({
      dishId: 1,
      userId: 1,
      mealTypes: 'breakfast',
      date: 2020 - 10 - 21
    })
  ])

  // await dishes[1].addIngredient(ingredients[0])
  // await dishes[1].addIngredient(ingredients[1])
  // //await order.addProduct(sampleProduct, {through: {quantity: 6}})
  // await users[0].addDish(dishes[1], {through: {mealTypes: 'breakfast'}})

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${dishes.length} dishes`)
  console.log(`seeded ${ingredients.length} ingredients`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
