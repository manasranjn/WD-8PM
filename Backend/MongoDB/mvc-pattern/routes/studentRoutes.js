const studentController = require('../controllers/studentController')
const express = require('express')
const router = express.Router()

router.post('/create', studentController.createStudent);
router.get('/get', studentController.getStudents)

module.exports = router