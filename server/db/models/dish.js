const Sequelize = require('sequelize')
const db = require('../db')

const Dish = db.define('dish', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  mealType: {
    type: Sequelize.ENUM(['Breakfast', 'Lunch', 'Dinner', 'Snack']),
    allowNull: false
  },
  healthLabels: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  CHOCDF_KCAL: {
    type: Sequelize.FLOAT(4)
  },
  FAT_KCAL: {
    type: Sequelize.FLOAT(4)
  },
  PROCNT_KCAL: {
    type: Sequelize.FLOAT(4)
  },
  calories: {
    type: Sequelize.FLOAT(4)
  },
  ENERC_KCAL: {
    type: Sequelize.FLOAT(4)
  },
  CA: {
    type: Sequelize.FLOAT(4)
  },
  CHOCDF: {
    type: Sequelize.FLOAT(4)
  },
  FAMS: {
    type: Sequelize.FLOAT(4)
  },
  FAPU: {
    type: Sequelize.FLOAT(4)
  },
  FASAT: {
    type: Sequelize.FLOAT(4)
  },
  FAT: {
    type: Sequelize.FLOAT(4)
  },
  FE: {
    type: Sequelize.FLOAT(4)
  },
  FOLDFE: {
    type: Sequelize.FLOAT(4)
  },
  FOLFD: {
    type: Sequelize.FLOAT(4)
  },
  K: {
    type: Sequelize.FLOAT(4)
  },
  MG: {
    type: Sequelize.FLOAT(4)
  },
  NA: {
    type: Sequelize.FLOAT(4)
  },
  NIA: {
    type: Sequelize.FLOAT(4)
  },
  P: {
    type: Sequelize.FLOAT(4)
  },
  PROCNT: {
    type: Sequelize.FLOAT(4)
  },
  RIBF: {
    type: Sequelize.FLOAT(4)
  },
  THIA: {
    type: Sequelize.FLOAT(4)
  },
  VITB6A: {
    type: Sequelize.FLOAT(4)
  },
  WATER: {
    type: Sequelize.FLOAT(4)
  },
  ZN: {
    type: Sequelize.FLOAT(4)
  },
  CHOLE: {
    type: Sequelize.FLOAT(4)
  },
  FATRN: {
    type: Sequelize.FLOAT(4)
  },
  FIBTG: {
    type: Sequelize.FLOAT(4)
  },
  FOLAC: {
    type: Sequelize.FLOAT(4)
  },
  SUGAR: {
    type: Sequelize.FLOAT(4)
  },
  TOCPHA: {
    type: Sequelize.FLOAT(4)
  },
  VITA_RAE: {
    type: Sequelize.FLOAT(4)
  },
  VITB12: {
    type: Sequelize.FLOAT(4)
  },
  VITC: {
    type: Sequelize.FLOAT(4)
  },
  VITD: {
    type: Sequelize.FLOAT(4)
  },
  VITK1: {
    type: Sequelize.FLOAT(4)
  }
})

module.exports = Dish
