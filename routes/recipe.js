const { Recipe } = require('../models')

// exporting routes, routes expect app to be passed
module.exports = app => {
  // GET all
  app.get('/recipes', (req, res) => {
    Recipe.findAll()
      .then(recipe => {
        res.json(recipe)
      })
      .catch(e => {
        res.sendStatus(500)
        console.log(e)
      })
  })
  // CREATE new
  app.post('/newRecipe', (req, res) => {
    Recipe.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => {
        res.sendStatus(500)
        console.log(e)
      })
  })
  // GET one
  app.get('/getRecipe/:id', (req, res) => {
    Recipe.findOne({
      where: { id: req.params.id }
    })
      .then(recipe => {
        res.json(recipe)
      })
      .catch(e => {
        res.sendStatus(500)
        console.log(e)
      })
  })
  // UPDATE one
  app.put('/editRecipe/:id', (req, res) => {
    Recipe.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => {
        res.sendStatus(500)
        console.log(e)
      })
  })
  // DELETE one
  app.delete('/deleteRecipe/:id', (req, res) => {
    Recipe.destroy({ where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => {
        res.sendStatus(500)
        console.log(e)
      })
  })
}
