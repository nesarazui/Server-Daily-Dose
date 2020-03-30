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
      healthLabels: ['dairy-free'],
      imgUrl: 'imtheurl', //
      mealType: 'Lunch', //
      CHOCDF_KCAL: 100.234,
      FAT_KCAL: 100.234,
      PROCNT_KCAL: 100.234,
      calories: 100.234,
      ENERC_KCAL: 100.234,
      CA: 100.234,
      CHOCDF: 100.234,
      FAMS: 100.234,
      FAPU: 100.234,
      FASAT: 100.234,
      FAT: 100.234,
      FE: 100.234,
      FOLDFE: 100.234,
      FOLFD: 100.234,
      K: 100.234,
      MG: 100.234,
      NA: 100.234,
      NIA: 100.234,
      P: 100.234,
      PROCNT: 100.234,
      RIBF: 100.234,
      THIA: 100.234,
      VITB6A: 100.234,
      WATER: 100.234,
      ZN: 100.234,
      CHOLE: 100.234,
      FATRN: 100.234,
      FIBTG: 100.234,
      FOLAC: 100.234,
      SUGAR: 100.234,
      TOCPHA: 100.234,
      VITA_RAE: 100.234,
      VITB12: 100.234,
      VITC: 100.234,
      VITD: 100.234,
      VITK1: 100.234
    }),
    Dish.create({
      name: 'Chia Seed Pudding', //
      healthLabels: ['dairy-free', 'gluten-free', 'vegan'],
      imgUrl: 'imtheurl', //
      mealType: 'Breakfast', //
      CHOCDF_KCAL: 100.234,
      FAT_KCAL: 100.234,
      PROCNT_KCAL: 100.234,
      calories: 100.234,
      ENERC_KCAL: 100.234,
      CA: 100.234,
      CHOCDF: 100.234,
      FAMS: 100.234,
      FAPU: 100.234,
      FASAT: 100.234,
      FAT: 100.234,
      FE: 100.234,
      FOLDFE: 100.234,
      FOLFD: 100.234,
      K: 100.234,
      MG: 100.234,
      NA: 100.234,
      NIA: 100.234,
      P: 100.234,
      PROCNT: 100.234,
      RIBF: 100.234,
      THIA: 100.234,
      VITB6A: 100.234,
      WATER: 100.234,
      ZN: 100.234,
      CHOLE: 100.234,
      FATRN: 100.234,
      FIBTG: 100.234,
      FOLAC: 100.234,
      SUGAR: 100.234,
      TOCPHA: 100.234,
      VITA_RAE: 100.234,
      VITB12: 100.234,
      VITC: 100.234,
      VITD: 100.234,
      VITK1: 100.234
    })
  ])

  const ingredients = await Promise.all([
    Ingredient.create({
      ingredientName: 'Soy Milk', //
      healthLabels: ['dairy-free', 'gluten-free', 'vegan', 'vegetarian'],
      portionSize: '1 cup', //['1', 'cup']
      CHOCDF_KCAL: 100.234,
      FAT_KCAL: 100.234,
      PROCNT_KCAL: 100.234,
      calories: 100.234,
      ENERC_KCAL: 100.234,
      CA: 100.234,
      CHOCDF: 100.234,
      FAMS: 100.234,
      FAPU: 100.234,
      FASAT: 100.234,
      FAT: 100.234,
      FE: 100.234,
      FOLDFE: 100.234,
      FOLFD: 100.234,
      K: 100.234,
      MG: 100.234,
      NA: 100.234,
      NIA: 100.234,
      P: 100.234,
      PROCNT: 100.234,
      RIBF: 100.234,
      THIA: 100.234,
      VITB6A: 100.234,
      WATER: 100.234,
      ZN: 100.234,
      CHOLE: 100.234,
      FATRN: 100.234,
      FIBTG: 100.234,
      FOLAC: 100.234,
      SUGAR: 100.234,
      TOCPHA: 100.234,
      VITA_RAE: 100.234,
      VITB12: 100.234,
      VITC: 100.234,
      VITD: 100.234,
      VITK1: 100.234
    }),
    Ingredient.create({
      ingredientName: 'Chia Seeds', //
      healthLabels: ['dairy-free', 'gluten-free', 'vegan', 'vegetarian'],
      portionSize: '4 cup',
      CHOCDF_KCAL: 100.234,
      FAT_KCAL: 100.234,
      PROCNT_KCAL: 100.234,
      calories: 100.234,
      ENERC_KCAL: 100.234,
      CA: 100.234,
      CHOCDF: 100.234,
      FAMS: 100.234,
      FAPU: 100.234,
      FASAT: 100.234,
      FAT: 100.234,
      FE: 100.234,
      FOLDFE: 100.234,
      FOLFD: 100.234,
      K: 100.234,
      MG: 100.234,
      NA: 100.234,
      NIA: 100.234,
      P: 100.234,
      PROCNT: 100.234,
      RIBF: 100.234,
      THIA: 100.234,
      VITB6A: 100.234,
      WATER: 100.234,
      ZN: 100.234,
      CHOLE: 100.234,
      FATRN: 100.234,
      FIBTG: 100.234,
      FOLAC: 100.234,
      SUGAR: 100.234,
      TOCPHA: 100.234,
      VITA_RAE: 100.234,
      VITB12: 100.234,
      VITC: 100.234,
      VITD: 100.234,
      VITK1: 100.234
    })
  ])

  await Promise.all([
    DishIngredient.create({
      dishId: 1,
      ingredientId: 1
    }),
    DishIngredient.create({
      dishId: 1,
      ingredientId: 2
    })
  ])

  await Promise.all([
    UserDish.create({
      dishId: 1,
      userId: 1,
      mealType: 'Breakfast',
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
