const router = require('express').Router()
const {UserDish} = require('../db/models')
const {Dish} = require('../db/models')
const {Ingredient} = require('../db/models')
module.exports = router

router.get('/:date', async (req, res, next) => {
  try {
    let dishesForYesterday = await UserDish.findAll({
      include: {
        model: Dish
      },
      where: {
        userId: req.user.id,
        date: req.params.date
      }
    })
    let calorieCount = sendCalorieCount(dishesForYesterday)
    let workouts = sendWorkout(calorieCount.calories)
    let workoutDebtData = {workouts, calorieCount}

    res.json(workoutDebtData)
  } catch (error) {
    next(error)
  }
})

function sendCalorieCount(obj) {
  let calData = {fatKcal: 0, calories: 0, chocdfKcal: 0}
  obj.forEach(dishObj => {
    calData.fatKcal += dishObj.dish.FAT_KCAL
    calData.calories += dishObj.dish.calories
    calData.chocdfKcal += dishObj.dish.CHOCDF_KCAL
  })
  return calData
}

function sendWorkout(cals) {
  const recommendedWorkout = []
  let intensityLevel = 1

  const chart = [
    {
      name: 'Swim',
      1: {min: 15, miles: 0.5}, //lowest intensity
      2: {min: 25, miles: 1}, //medium intensity
      3: {min: 35, miles: 1.5}, //high intensity
      4: {min: 45, miles: 2} //highest intensity
    },
    {
      name: 'Elliptical',
      1: {min: 15, miles: 0.5},
      2: {min: 25, miles: 1},
      3: {min: 35, miles: 1.5},
      4: {min: 45, miles: 2}
    },
    {
      name: 'Run',
      1: {min: 15, miles: 0.5},
      2: {min: 25, miles: 1},
      3: {min: 35, miles: 1.5},
      4: {min: 45, miles: 2}
    }
  ]

  if (cals <= 500) {
    intensityLevel = 1
  } else if (cals > 500 && cals <= 1200) {
    intensityLevel = 2
  } else if (cals > 1200 && cals <= 1800) {
    intensityLevel = 3
  } else if (cals > 1800 && cals <= 2400) {
    intensityLevel = 3
  } else {
    intensityLevel = 4
  }

  chart.forEach(workout => {
    let obj = {}
    obj.name = workout.name
    obj.min = workout[intensityLevel].min
    obj.miles = workout[intensityLevel].miles
    recommendedWorkout.push(obj)
  })
  return recommendedWorkout
}
