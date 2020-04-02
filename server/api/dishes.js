const router = require('express').Router()
const {Dish, Ingredient, UserDish} = require('../db/models')
module.exports = router

router.put('/:id', async (req, res, next) => {
  try {
    const {
      name,
      imgUrl,
      healthLabels,
      mealType,
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
    const dish = await Dish.findByPk(req.params.id)
    if (dish) {
      let updatedDish = await dish.update({
        name,
        imgUrl,
        healthLabels,
        mealType,
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
      if (updatedDish) {
        res.status(200).json(updatedDish)
      }
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
    const {
      name,
      imgUrl,
      healthLabels,
      mealType,
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
    } = req.body.dish
    const newDish = await Dish.create({
      name,
      imgUrl,
      healthLabels,
      mealType,
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
    await req.body.ingredients.forEach(async ingredient => {
      let newIngredient = await Ingredient.create(ingredient)
      await newDish.addIngredient(newIngredient)
    })

    const dateToSave = new Date()
    const newUserDish = {
      mealType: req.body.dish.mealType,
      userId: req.user.id,
      dishId: newDish.id,
      date: dateToSave
    }

    await UserDish.create(newUserDish)

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
