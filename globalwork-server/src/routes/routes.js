const controllerAuth = require('../controller/authControl')
const validators = require('../validators/authentication')
module.exports = (app) => {
    app.post('/register', validators.register, controllerAuth.register)

    app.post('/registerTicket', controllerAuth.registerTicket)

    app.post('/login', validators.login, controllerAuth.login)
}
