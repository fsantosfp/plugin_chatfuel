const express = require('express')
const router = express.Router()

const JSONController = require('../controller/JSONController')

router.post('/api/save', JSONController.save)

module.exports = router