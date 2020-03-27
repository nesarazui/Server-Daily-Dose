const router = require('express').Router()
const {UserDish} = require('../db/models')
const {Dish} = require('../db/models')
const {Ingredient} = require('../db/models')
module.exports = router

router.get('/dishIngredient/:dishId/', async (req, res, next) => {
  try {
    console.log('GET BY DISH ID')
    let dishWithIngredients = await UserDish.findAll({
      where: {userId: 1, dishId: 1},
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
    console.log('DISH-with-INGREDIENTS-OBJECT: ', dishWithIngredients)
  } catch (error) {
    next(error)
  }
})

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
