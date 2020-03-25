const router = require('express').Router()
const {Dish} = require('../db/models')
const {UserDish} = require('../db/models')
module.exports = router

router.get('/:date', async (req, res, next) => {
  try {
    console.log('DOES THIS WORK AT ALL')
    let dishesByDay = await Dish.findAll({
      include: {
        model: UserDish,
        as: 'User-Dish'
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

router.put('/:id', async (req, res, next) => {
  try {
    const {name, dietType, mealType, nutrition} = req.body
    const dish = await Dish.findByPk(req.params.id)
    if (dish) {
      await dish.update({name, dietType, mealType, nutrition})
      res.status(200).json(dish)
    } else {
      res.status(404).send('Dish not found.')
    }
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const dish = await Dish.findByPk(req.params.id)
    if (dish) {
      await dish.destroy()
      res.sendStatus(200)
    } else {
      res.status(404).send('Dish not found.')
    }
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {name, dietType, mealType, nutrition} = req.body
    const newDish = await Dish.create({
      name,
      dietType,
      mealType,
      nutrition
    })
    if (newDish) {
      res.status(201).json(newDish)
    } else {
      res.status(404).send('Could not create new dish.')
    }
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const dish = await Dish.findByPk(req.params.id)
    if (dish) {
      res.status(200).json(dish)
    } else {
      res.status(404).send('Dish not found.')
    }
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const dishes = await Dish.findAll()
    if (dishes) {
      res.status(200).json(dishes)
    } else {
      res.status(404).send('Dishes not found.')
    }
  } catch (error) {
    next(error)
  }
})
