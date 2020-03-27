const router = require('express').Router()
const {Ingredient} = require('../db/models')
module.exports = router

router.put('/:id', async (req, res, next) => {
  try {
    const {
      ingredientName,
      portionSize,
      healthLabels,
      CHOCDF_KCAL,
      FAT_KCAL,
      PROCNT_KCAL,
      calories,
      FAT,
      FASAT,
      FAMS,
      FAPU,
      CHOCDF,
      FIBTG,
      SUGAR,
      PROCNT,
      NA,
      CA,
      MG,
      K,
      FE,
      ZN,
      P,
      VITC,
      THIA,
      RIBF,
      NIA,
      VITB6A,
      FOLDFE,
      FOLFD,
      TOCPHA,
      WATER,
      ENERC_KCAL,
      CHOLE,
      FATRN,
      FOLAC,
      VITA_RAE,
      VITB12,
      VITD,
      VITK1
    } = req.body
    const ingredient = await Ingredient.findByPk(req.params.id)
    if (ingredient) {
      await ingredient.update({
        ingredientName,
        portionSize,
        healthLabels,
        CHOCDF_KCAL,
        FAT_KCAL,
        PROCNT_KCAL,
        calories,
        FAT,
        FASAT,
        FAMS,
        FAPU,
        CHOCDF,
        FIBTG,
        SUGAR,
        PROCNT,
        NA,
        CA,
        MG,
        K,
        FE,
        ZN,
        P,
        VITC,
        THIA,
        RIBF,
        NIA,
        VITB6A,
        FOLDFE,
        FOLFD,
        TOCPHA,
        WATER,
        ENERC_KCAL,
        CHOLE,
        FATRN,
        FOLAC,
        VITA_RAE,
        VITB12,
        VITD,
        VITK1
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
    const {
      ingredientName,
      portionSize,
      healthLabels,
      CHOCDF_KCAL,
      FAT_KCAL,
      PROCNT_KCAL,
      calories,
      FAT,
      FASAT,
      FAMS,
      FAPU,
      CHOCDF,
      FIBTG,
      SUGAR,
      PROCNT,
      NA,
      CA,
      MG,
      K,
      FE,
      ZN,
      P,
      VITC,
      THIA,
      RIBF,
      NIA,
      VITB6A,
      FOLDFE,
      FOLFD,
      TOCPHA,
      WATER,
      ENERC_KCAL,
      CHOLE,
      FATRN,
      FOLAC,
      VITA_RAE,
      VITB12,
      VITD,
      VITK1
    } = req.body
    const newIngredient = await Ingredient.create({
      ingredientName,
      portionSize,
      healthLabels,
      CHOCDF_KCAL,
      FAT_KCAL,
      PROCNT_KCAL,
      calories,
      FAT,
      FASAT,
      FAMS,
      FAPU,
      CHOCDF,
      FIBTG,
      SUGAR,
      PROCNT,
      NA,
      CA,
      MG,
      K,
      FE,
      ZN,
      P,
      VITC,
      THIA,
      RIBF,
      NIA,
      VITB6A,
      FOLDFE,
      FOLFD,
      TOCPHA,
      WATER,
      ENERC_KCAL,
      CHOLE,
      FATRN,
      FOLAC,
      VITA_RAE,
      VITB12,
      VITD,
      VITK1
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
