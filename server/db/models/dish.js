const Sequelize = require('sequelize')
const db = require('../db')

const Dish = db.define('dish', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dietLabels: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  cautions: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  mealType: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  healthLabels: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalEnergy: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalCalcium: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalCarbs: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalMonounsaturated: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalPolyunsaturated: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalSaturated: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalFat: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalIron: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalFolateEquivalent: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalFolateFood: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalPotassium: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalMagnesium: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalSodium: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalNiacin: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalPhosphorus: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalProtein: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalRiboflavin: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalThiamin: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalVitaminB6: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalWater: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  totalZinc: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  calFromCarb: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  calFromFat: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  calFromProtein: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  percentCalcium: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  percentCarbs: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  percentEngergy: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  percentSaturated: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  percentFat: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  percentIron: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  percentFolateEquivalent: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  percentPotassium: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  percentMagnesium: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  percentSodium: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  percentNiacin: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  percentPhosphorus: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  percentProtein: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  percentRiboflavin: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  percentThiamin: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  percentVitaminB6: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  percentZinc: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

// create hook that before save:
// you find the ingredients associated with this meal
// add up all their nutrition values
// and that becomes the nutrition data for the dish

// const setNutrition = dish => {

// }

// Dish.beforeCreate(setNutrition)
// Dish.beforeUpdate(setNutrition)

module.exports = Dish
