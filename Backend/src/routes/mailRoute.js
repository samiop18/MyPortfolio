const express = require('express')
const router = express.Router()
const contact = require('../controllers/contact')
router.post('/send',contact.handleContactForm)


module.exports = router