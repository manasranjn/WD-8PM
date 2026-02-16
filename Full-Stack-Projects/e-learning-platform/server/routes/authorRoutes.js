const express = require('express')
const router = express.Router()
const { createAuthor, getAuthors, getAuthorById, updateAuthor, deleteAuthor } = require('../controllers/authorController')

router.use('/create', createAuthor)
router.use('/get', getAuthors)
router.use('/getById/:id', getAuthorById)
router.use('/update/:id', updateAuthor)
router.use('/delete/:id', deleteAuthor)

module.exports = router