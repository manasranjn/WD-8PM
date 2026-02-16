const express = require('express')
const router = express.Router()

const authorRouter = require('./authorRoutes')

router.use('/author', authorRouter)

module.exports = router