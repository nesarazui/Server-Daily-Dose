const router = require('express').Router()
const {UserDish} = require('../db/models')
const {Dish} = require('../db/models')
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
