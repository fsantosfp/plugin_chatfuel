const express = require('express')

const IntentController = require('../controller/IntentsController')
const HomeControlle = require('../controller/HomeController')

const routes = express.Router()

routes.get('/home', HomeControlle.index)

routes.get('/project/:id',IntentController.intentsList)
routes.get('/project/actions-codelab-92615',IntentController.intentsList)

module.exports = routes