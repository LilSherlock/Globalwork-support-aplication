const {User} = require('../models')
const {Ticket} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req,res) {
        try {
            const user = await User.create(req.body)
            res.send(user)
        } catch (err) {
            res.status(400).send({
                error: err.message
            })
        }
    },



    async registerTicket (req,res) {
        try {
            const ticket = await Ticket.create(req.body)
            res.send(ticket)
        } catch (err) {
            res.status(400).send({
                error: err.message
            })
        }
    },

    async login (req,res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                return res.status(403).send({
                    error: 'La informacion de inicio sesion es incorrecta'
                })
            }
            const passwordValid = await user.validPassword(password)
            
            if (!passwordValid) {
                return res.status(403).send({
                    error: 'Datos ingresados incorrectos'
                })
            }
            const userJson = user.toJSON()
            res.send ({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(403).send({
                error: err.message
            })
        }
    }
}