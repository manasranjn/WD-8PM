const studentController = require('../controllers/studentController')
const express = require('express')
const router = express.Router()

router.post('/createStudent', studentController.createStudent);
router.get('/getStudent', studentController.getStudent)

module.exports = router