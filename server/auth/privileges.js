const adminsOnly = (req, res, next) => {
  if (req.user && !req.user.isAdmin) {
    const err = new Error('Not An Admin')
    err.status = 401
    return next(err)
  }
  next()
}

const adminOrUser = (req, res, next) => {
  if (
    req.user &&
    req.user.id !== req.params.id &&
    req.user &&
    !req.user.isAdmin
  ) {
    const err = new Error('Not An Admin')
    err.status = 401
    return next(err)
  }
  next()
}

const usersOnly = (req, res, next) => {
  if (!req.user) {
    const err = new Error('User not found.')
    err.status = 401
    return next(err)
  }
  next()
}

const guestsOnly = (req, res, next) => {
  if (req.user) {
    const err = new Error(`You're already signed in.`)
    err.status = 401
    return next(err)
  }
  next()
}

module.exports = {adminsOnly, adminOrUser, usersOnly, guestsOnly}
