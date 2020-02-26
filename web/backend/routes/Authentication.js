const express = require('express')
const routes = express.Router()

const AuthController = require('../controller/AuthController')

routes.get("/", AuthController.getAuthorization)
routes.get('/auth', AuthController.getAccessToken)

module.exports = routes