const express = require('express')

const IntentController = require('../controller/IntentsController')

const routes = express.Router()

routes.get('/intents/:id',IntentController.intentsList)

module.exports = routes