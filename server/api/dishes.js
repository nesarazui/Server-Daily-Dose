const router = require('express').Router()
const {Dish} = require('../db/models')
const {UserDish} = require('../db/models')
module.exports = router

// router.get('/:date', async (req, res, next) => {
//   try {
//     console.log('DOES THIS WORK AT ALL')
//     let dishesByDay = await Dish.findAll({
//       include: {
//         model: UserDish,
//         as: 'User-Dish'
//       },
//       where: {
//         userId: 1,
//         date: req.params.date
//       }
//     })
//     console.log('DISHES ARRAY: ', dishesByDay)
//     res.json(dishesByDay)
//   } catch (error) {
//     next(error)
//   }
// })

router.put('/:id', async (req, res, next) => {
  try {
    const {
      name,
      imgUrl,
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
    const dish = await Dish.findByPk(req.params.id)
    if (dish) {
      let updatedDish = await dish.update({
        name,
        imgUrl,
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
      mealType,
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
    const newDish = await Dish.create({
      name,
      imgUrl,
      mealType,
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
    if (newDish) {
      console.log('oh yeah i made it', newDish)
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
