const Sequelize = require('sequelize')
// pulling DB connecton from config file
const sequelize = require('../config')

// passing DB connection and Sequelize to the Recipe Model
let Recipe = require('./recipe.js')(sequelize, Sequelize)

// exporting Recipe for the Routes
module.exports = { Recipe }
