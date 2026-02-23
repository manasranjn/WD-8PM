const Article = require('../models/article')
const Author = require('../models/author')

exports.createArticle = async (req, res) => {
    try {
        const { title, description, images, author, category } = req.body

        //? Validate Required Fields
        if (!title || !description || !images || !author || !category) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        //? Check if Author exists
        const existAuthor = await Author.findById(author)
        if (!existAuthor) {
            return res.status(404).json({
                success: false,
                message: "Author not found"
            })
        }

        //! Create Article
        const article = await Article.create({
            title,
            description,
            images,
            author,
            category
        })

        return res.status(201).json({
            success: true,
            message: "Article created successfully",
            data: article
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//! Get All Articles
exports.getArticles = async (req, res) => {
    try {
        const articles = await Article.find()
            .populate('author', 'name profilePic rating')
            .sort({ createdAt: -1 })

        return res.status(200).json({
            success: true,
            message: "All articles fetched",
            count: articles.length,
            data: articles
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//! Get Article By ID
exports.getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id)
            .populate('author', 'name email profilePic rating')

        if (!article) {
            return res.status(404).json({
                success: false,
                message: "Article not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Article found",
            data: article
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//! Update Article
exports.updateArticle = async (req, res) => {
    try {
        const { title, description, images, author, category } = req.body

        const article = await Article.findById(req.params.id)
        if (!article) {
            return res.status(404).json({
                success: false,
                message: "Article not found"
            })
        }

        //? check existence
        if (author && author !== article.author.toString()) {
            const existAuthor = await Author.findById(author)
            if (!existAuthor) {
                return res.status(404).json({
                    success: false,
                    message: "New author not found"
                })
            }
        }

        //? Update Fields
        article.title = title || article.title
        article.description = description || article.description
        article.images = images || article.images
        article.author = author || article.author
        article.category = category || article.category

        await article.save()

        return res.status(200).json({
            success: true,
            message: "Article updated successfully",
            data: article
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

//! Delete Article
exports.deleteArticle = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id)

        if (!article) {
            return res.status(404).json({
                success: false,
                message: "Article not found"
            })
        }

        await article.deleteOne()

        return res.status(200).json({
            success: true,
            message: "Article deleted successfully",
            data: article
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}