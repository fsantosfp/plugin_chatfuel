const express = require('express')
const routes = express.Router()

const APIController = require('../controller/APIController')


routes.get('/intents/:id',APIController.intentsList)


module.exports = routes