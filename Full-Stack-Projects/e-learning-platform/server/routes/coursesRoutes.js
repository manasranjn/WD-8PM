const express = require('express')
const router = express.Router()
const { getCourses, createCourse, getCourseById, updateCourse, deleteCourse } = require('../controllers/courseController')

router.use('/get', getCourses)
router.use('/getById/:id', getCourseById)
router.use('/create', createCourse)
router.use('/update/:id', updateCourse)
router.use('/delete/:id', deleteCourse)

module.exports = router