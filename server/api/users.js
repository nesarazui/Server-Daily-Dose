const router = require('express').Router()
const {User} = require('../db/models')
const {adminsOnly, adminOrUser} = require('../auth/privileges')
module.exports = router

router.get('/', adminsOnly, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email']
    })
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', adminsOnly, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    if (user) {
      res.status(200).json(user)
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', adminOrUser, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    if (user) {
      await user.destroy()
      res.sendStatus(200).send('User deleted.')
    } else {
      res.status(404).send('User not found.')
    }
  } catch (error) {
    next(error)
  }
})

/* Updating profile */
// router.put('/:id', adminOrUser, async (req, res, next) => {
//   try {
//     const {
//       email,
//       password,
//       name,
//       sex,
//       dietaryPreference,
//       birthdate,
//       height,
//       weight,
//       nutritionStatus
//     } = req.body
//     const user = await User.findByPk(req.params.id)
//     if (user) {
//       await user.update({
//         email,
//         password,
//         name,
//         sex,
//         dietaryPreference,
//         birthdate,
//         height,
//         weight,
//         nutritionStatus
//       })
//       res.status(200).json(user)
//     } else {
//       res.status(404).send('User not found.')
//     }
//   } catch (error) {
//     next(error)
//   }
// })

/* Making profile */
// router.post('/', async (req, res, next) => {
//   try {
//     const {
//       email,
//       password,
//       name,
//       sex,
//       dietaryPreference,
//       birthdate,
//       height,
//       weight,
//       nutritionStatus
//     } = req.body
//     const newUser = await User.create({
//       email,
//       password,
//       name,
//       sex,
//       dietaryPreference,
//       birthdate,
//       height,
//       weight,
//       nutritionStatus
//     })
//     if (newUser) {
//       res.status(201).json(newUser)
//     } else {
//       res.status(404).send('Could not create new user.')
//     }
//   } catch (error) {
//     next(error)
//   }
// })
