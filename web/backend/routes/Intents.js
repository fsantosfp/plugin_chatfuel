const express = require('express')
const routes = express.Router()

const IntentController = require('../controller/IntentsController')


routes.get('/intents/:id',IntentController.intentsList)


module.exports = routes