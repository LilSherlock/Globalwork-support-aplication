const controllerAuth = require('../controller/authControl')
module.exports = (app) => {
    app.post('/register', controllerAuth.register)
}
