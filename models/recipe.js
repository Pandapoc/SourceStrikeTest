module.exports = (sequelize, Sequelize) => {
  // creating recipe model
  class Recipe extends Sequelize.Model { }

  // Defining necissary columns
  Recipe.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    title: Sequelize.STRING,
    directions: Sequelize.STRING
  }, {
    sequelize,
    tableName: 'recipetbl'
  })

  return Recipe
}
