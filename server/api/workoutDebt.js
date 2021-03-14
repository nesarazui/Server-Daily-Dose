const router = require('express').Router()
const {UserDish} = require('../db/models')
const {Dish} = require('../db/models')
module.exports = router

router.post('/singleDish', async (req, res, next) => {
  try {
    const caloriesForSingleDish = req.body
    const workoutDebtForSingleDish = getWorkoutDebt(caloriesForSingleDish)
    res.json(workoutDebtForSingleDish)
  } catch (error) {
    next(error)
  }
})

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
    let workoutDebtForDay = getWorkoutDebt(calorieCount)
    res.json(workoutDebtForDay)
  } catch (error) {
    next(error)
  }
})

function sendCalorieCount(obj) {
  let calData = {fat: 0, protein: 0, carbs: 0}
  obj.forEach(dishObj => {
    calData.fat += dishObj.dish.FAT_KCAL
    calData.protein += dishObj.dish.PROCNT_KCAL
    calData.carbs += dishObj.dish.CHOCDF_KCAL
  })
  return calData
}

const getWorkoutDebt = calorieCount => {
  let totalWorkoutTime = 0
  let maxHeartRate = 0
  const workouts = ['running', 'elliptical', 'swimming', 'cycling']
  const percentHeartRateMap = {fat: 75, carbs: 85, protein: 65, fatAndCarb: 80}
  let heartRatesToCalc = []

  if (calorieCount.fat > 0 && calorieCount.carbs > 0) {
    let combinedFatCarb = (calorieCount.carbs + calorieCount.fat) / 100 * 15
    totalWorkoutTime += combinedFatCarb
    if (calorieCount.protein > 0) {
      totalWorkoutTime += calorieCount.protein / 100 * 10
    }
    maxHeartRate = percentHeartRateMap.fatAndCarb
  } else {
    // eslint-disable-next-line guard-for-in
    for (let cal in calorieCount) {
      let num = calorieCount[cal]
      if (num > 0) {
        totalWorkoutTime += num / 100 * 10
        heartRatesToCalc.push(percentHeartRateMap[cal])
      }
    }
    let sortedHeartRates = heartRatesToCalc.sort()
    let median = Math.floor(sortedHeartRates.length / 2)
    maxHeartRate = sortedHeartRates[median]
  }

  totalWorkoutTime = Math.ceil(totalWorkoutTime)
  let workoutCalculations = {totalWorkoutTime, maxHeartRate, workouts}
  let workoutDebtData = {calorieCount, workoutCalculations}
  return workoutDebtData
}
