module.exports = (sequelize, Sequelize) => {
  // creating recipe model
  class Recipe extends Sequelize.Model { }

  // Defining necissary columns
  Recipe.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: Sequelize.STRING,
    directions: Sequelize.STRING
  }, {
    sequelize,
    modelName: 'recipe'
  })

  return Recipe
}
