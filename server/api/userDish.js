const router = require('express').Router()
const {UserDish} = require('../db/models')
const {Dish} = require('../db/models')
const {Ingredient} = require('../db/models')
module.exports = router

// We can only use this route handler once we have login functionality:
// router.get('/:date', async (req, res, next) => {
//     try {
//         let date = req.params.date
//         let dishesByDay = await UserDish.findAll({
//             where: {
//                 userId: req.user.id,
//                 createdAt: date
//             }
//         })
//         res.json(dishesByDay)
//     } catch (error) {
//       next(error)
//     }
//   })

// router.get('/dishIngredient/:dishId', async (req, res, next) => {
//   try {
//     console.log('GET BY DISH ID')
//     let dishWithIngredients = await UserDish.findAll({
//       include: {
//         model: Dish
//       },
//       where: {
//         userId: 1,
//         dishId: req.params.dishId
//       },
//       include: {
//         model: DishIngredients, where: {id: id we are passing in}
//       },
//     })
//     if (dishWithIngredients) {
//       res.json(dishWithIngredients)
//     } else {
//       res.status(404).send('Could Not Find Object Requested')
//     }
//     console.log('DISH-with-INGREDIENTS-OBJECT: ', dishWithIngredients)

//   } catch (error) {
//     next(error)
//   }
// })

// const users = await User.findAll({
//   include: {
//     model: Tool,
//     as: ‘Instruments’,
//     include: {
//       model: Teacher,
//       include: [ /* etc */ ]
//     }
//   }
// });
// console.log(JSON.stringify(users, null, 2));

router.get('/:date', async (req, res, next) => {
  try {
    console.log('DOES THIS WORK AT ALL')
    let dishesByDay = await UserDish.findAll({
      include: {
        model: Dish
      },
      where: {
        userId: 1,
        date: req.params.date
      }
    })
    console.log('DISHES ARRAY: ', dishesByDay)
    res.json(dishesByDay)
  } catch (error) {
    next(error)
  }
})
