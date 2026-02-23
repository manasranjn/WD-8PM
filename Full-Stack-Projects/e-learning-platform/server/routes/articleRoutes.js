const { createArticle, getArticles, getArticleById, updateArticle, deleteArticle } = require('../controllers/articleControlle')
const express = require('express')
const router = express.Router()

router.use('/create', createArticle)
router.use('/get', getArticles)
router.use('/getById/:id', getArticleById)
router.use('/edit/:id', updateArticle)
router.use('/delete/:id', deleteArticle)

module.exports = router