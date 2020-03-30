const router = require('express').Router()
const {UserDish} = require('../db/models')
const {Dish} = require('../db/models')
const {Ingredient} = require('../db/models')
module.exports = router

router.get('/dishIngredient/:dishId/', async (req, res, next) => {
  try {
    let dishWithIngredients = await UserDish.findAll({
      where: {userId: req.user.id, dishId: req.params.dishId},
      include: {
        model: Dish,
        include: {
          model: Ingredient
        }
      }
    })
    if (dishWithIngredients) {
      res.json(dishWithIngredients)
    } else {
      res.status(404).send('Could Not Find Object Requested')
    }
  } catch (error) {
    next(error)
  }
})

router.get('/:date', async (req, res, next) => {
  try {
    let dishesByDay = await UserDish.findAll({
      include: {
        model: Dish
      },
      where: {
        userId: req.user.id,
        date: req.params.date
      }
    })
    res.json(dishesByDay)
  } catch (error) {
    next(error)
  }
})
