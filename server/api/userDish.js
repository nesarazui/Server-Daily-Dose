const router = require('express').Router()
const {UserDish} = require('../db/models')
const {Op} = (Sequelize = require('sequelize'))
module.exports = router

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

// router.get('/:date', async (req, res, next) => {
//   try {
//       console.log("DOES THIS WORK AT ALL")
//       let date = new Date(req.params.date).setHours(0,0,0,0)
//       let dishesByDay = await UserDish.findAll({
//           where: {
//               userId: 1,
//               createdAt: {
//                 [Op.gte] : date,
//                 [Op.lt] : date.setDate(date.getDate() + 1)
//               }
//           }
//       })
//       //console.log('DISHES ARRAY: ', dishesByDay)
//       res.json(dishesByDay)
//   } catch (error) {
//     next(error)
//   }
// })
