const router = require('express').Router()
const {Ingredient} = require('../db/models')
module.exports = router

router.put('/:id', async (req, res, next) => {
  try {
    const {name, dietType, foodType, nutrition, portionSize} = req.body
    const ingredient = await Ingredient.findByPk(req.params.id)
    if (ingredient) {
      await ingredient.update({
        name,
        dietType,
        foodType,
        nutrition,
        portionSize
      })
      res.status(200).json(ingredient)
    } else {
      res.status(404).send('Ingredient not found.')
    }
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const ingredient = await Ingredient.findByPk(req.params.id)
    if (ingredient) {
      await ingredient.destroy()
      res.sendStatus(200)
    } else {
      res.status(404).send('Ingredient not found.')
    }
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {name, dietType, foodType, nutrition, portionSize} = req.body
    const newIngredient = await Ingredient.create({
      name,
      dietType,
      foodType,
      nutrition,
      portionSize
    })
    if (newIngredient) {
      res.status(201).json(newIngredient)
    } else {
      res.status(404).send('Could not create new ingredient.')
    }
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const ingredient = await Ingredient.findByPk(req.params.id)
    if (ingredient) {
      res.status(200).json(ingredient)
    } else {
      res.status(404).send('Ingredient not found.')
    }
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const ingredients = await Ingredient.findAll()
    if (ingredients) {
      res.status(200).json(ingredients)
    } else {
      res.status(404).send('Ingredients not found.')
    }
  } catch (error) {
    next(error)
  }
})
