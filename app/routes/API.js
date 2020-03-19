const express = require('express')
const router = express.Router()

const StorageController = require('../controller/StorageController')
const IntentController = require('../controller/IntentController')

router.post('/api/save', StorageController.save)

router.post('/api/:projectId/detectIntent', IntentController.detectIntent)

module.exports = router