const router = require('express').Router()
const {User} = require('../db/models')
const {usersOnly, guestsOnly} = require('./privileges')
module.exports = router

router.post('/login', guestsOnly, async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', guestsOnly, async (req, res, next) => {
  try {
    const {
      email,
      password,
      name,
      sex,
      dietaryPreference,
      birthdate,
      height,
      weight
    } = req.body
    const newUser = await User.create({
      email,
      password,
      name,
      sex,
      dietaryPreference,
      birthdate,
      height,
      weight
    })
    if (newUser) {
      req.login(newUser, err => (err ? next(err) : res.json(newUser)))
    }
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists.')
    }
    next(err)
  }
})

router.put('/editProfile', usersOnly, async (req, res, next) => {
  try {
    const user = req.user
    const {
      email,
      password,
      name,
      sex,
      dietaryPreference,
      birthdate,
      height,
      weight
    } = req.body

    if (user) {
      const updatedUser = await user.update({
        email,
        password,
        name,
        sex,
        dietaryPreference,
        birthdate,
        height,
        weight
      })
      res.status(200).json(updatedUser)
    } else {
      res.status(404).send('User not found.')
    }
  } catch (error) {
    next(error)
  }
})

router.post('/logout', (req, res) => {
  try {
    req.logout()
    req.session.destroy()
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
  }
})

router.get('/me', (req, res) => {
  try {
    res.json(req.user)
  } catch (e) {
    console.log(e)
  }
})

router.use('/google', require('./google'))
