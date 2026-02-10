const express = require('express')
const router = express.Router()

const studentRoutes = require('../routes/studentRoutes')
const dataRoutes = require('../routes/dataRoutes')

router.use('/students', studentRoutes)
router.use('/data', dataRoutes)

module.exports = router