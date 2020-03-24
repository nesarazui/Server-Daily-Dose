const Sequelize = require('sequelize')
const db = require('../db')

const Dish = db.define('dish', {
  dishName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mealTypes: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  healthLabels: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  CHOCDF_KCAL: {
    type: Sequelize.INTEGER
  },
  FAT_KCAL: {
    type: Sequelize.INTEGER
  },
  PROCNT_KCAL: {
    type: Sequelize.INTEGER
  },
  ENERC_KCAL: {
    type: Sequelize.INTEGER
  },
  CA: {
    type: Sequelize.INTEGER
  },
  CHOCDF: {
    type: Sequelize.INTEGER
  },
  FAMS: {
    type: Sequelize.INTEGER
  },
  FAPU: {
    type: Sequelize.INTEGER
  },
  FASAT: {
    type: Sequelize.INTEGER
  },
  FAT: {
    type: Sequelize.INTEGER
  },
  FE: {
    type: Sequelize.INTEGER
  },
  FOLDFE: {
    type: Sequelize.INTEGER
  },
  FOLFD: {
    type: Sequelize.INTEGER
  },
  K: {
    type: Sequelize.INTEGER
  },
  MG: {
    type: Sequelize.INTEGER
  },
  NA: {
    type: Sequelize.INTEGER
  },
  NIA: {
    type: Sequelize.INTEGER
  },
  P: {
    type: Sequelize.INTEGER
  },
  PROCNT: {
    type: Sequelize.INTEGER
  },
  RIBF: {
    type: Sequelize.INTEGER
  },
  THIA: {
    type: Sequelize.INTEGER
  },
  VITB6A: {
    type: Sequelize.INTEGER
  },
  WATER: {
    type: Sequelize.INTEGER
  },
  ZN: {
    type: Sequelize.INTEGER
  },
  cholesterol: {
    type: Sequelize.INTEGER
  },
  transfat: {
    type: Sequelize.INTEGER
  },
  fiber: {
    type: Sequelize.INTEGER
  },
  folicAcid: {
    type: Sequelize.INTEGER
  },
  sugar: {
    type: Sequelize.INTEGER
  },
  vitaminE: {
    type: Sequelize.INTEGER
  },
  vitaminA: {
    type: Sequelize.INTEGER
  },
  vitaminB12: {
    type: Sequelize.INTEGER
  },
  vitaminC: {
    type: Sequelize.INTEGER
  },
  vitaminD: {
    type: Sequelize.INTEGER
  },
  vitaminK: {
    type: Sequelize.INTEGER
  }
})

module.exports = Dish
