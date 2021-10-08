const Sequelize = require('sequelize')
require('dotenv').config()

// setting DB connection variable
let sequelize = new Sequelize(process.env.DB_CONNECTION)

// exporting DB connection
module.exports = sequelize
