const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const config = require('./src/config/config')
const {sequelize} = require('./src/models')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./src/routes/routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`server allocated to ${config.port}`)
  })
