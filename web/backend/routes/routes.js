const express = require('express')

const IntentController = require('../controller/IntentsController')
const HomeControlle = require('../controller/HomeController')

const routes = express.Router()

routes.get('/home', HomeControlle.index)

//routes.get('/project/:id',IntentController.intentsList)
routes.get('/project/:id',HomeControlle.index)

module.exports = routes