const express = require('express')
const router = express.Router()

const JSONController = require('../controller/JSONController')
const IntentController = require('../controller/IntentController')
const CredentialController = require('../controller/CredentialController')

router.post('/api/save', JSONController.save)

router.post('/api/:projectId/detectIntent', IntentController.detectIntent)

module.exports = router