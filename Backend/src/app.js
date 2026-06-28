const express = require('express')
const route = require('./routes/mailRoute')
const cors = require('cors')
require('dotenv').config()
const app = express()

app.use(cors());
app.use(express.json())
app.use('/api',route)




module.exports = app