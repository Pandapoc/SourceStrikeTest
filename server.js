const express = require('express')
const { join } = require('path')
const app = express()
let PORT = process.env.PORT || 3000

// express middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// passing app to routes index file
require('./routes')(app)

// starting server
require('./config').sync()
  .then(_ => {
    app.listen(PORT)
    console.log(PORT)
  })
  .catch(e => console.log(e))
