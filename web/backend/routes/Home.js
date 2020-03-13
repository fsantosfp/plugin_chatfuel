const express = require('express')

const HomeControlle = require('../controller/HomeController')

const routes = express.Router()

routes.get('/home', HomeControlle.index)

module.exports = routes