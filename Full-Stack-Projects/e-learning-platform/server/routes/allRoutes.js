const express = require('express')
const router = express.Router()

const authorRouter = require('./authorRoutes')
const authRoutes = require('./authRoutes')
const articleRoutes = require('./articleRoutes')
const courseRouter = require('./coursesRoutes')

router.use('/author', authorRouter)
router.use('/auth', authRoutes)
router.use('/article', articleRoutes)
router.use('/course', courseRouter)

module.exports = router