const express = require('express')
const routes = express.Router()

const HomeControlle = require('../controller/HomeController')

routes.get('/home', HomeControlle.index)

module.exports = routes