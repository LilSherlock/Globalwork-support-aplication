const fs =  require('fs')
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');

const db = {}
console.log(`database: ${config.db.database}`);
const sequelize = new Sequelize('postgres://postgres@35.196.26.40:5432/gwsupport')

fs
    .readdirSync(__dirname)
    .filter((file) => 
        file !== 'index.js'
    )
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
        console.log(model)
        db[model.name] = model
    })
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
