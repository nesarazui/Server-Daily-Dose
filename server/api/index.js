const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/dishes', require('./dishes'))
router.use('/ingredients', require('./ingredients'))
router.use('/userDish', require('./userDish'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
