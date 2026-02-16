const Author = require('../models/author')

exports.createAuthor = async (req, res) => {
    try {
        const { name, email, bio, profilePic, rating } = req.body;

        //? Validate Data
        if (!name || !email || !profilePic) {
            return res.status(400).json({
                success: false,
                message: "Name, Email and Profile picture is required"
            })
        }

        //? Check if author already exist
        const existAuthor = await Author.findOne({ email });
        if (existAuthor) {
            return res.status(400).json({
                success: false,
                message: "Email Already exist"
            })
        }

        const author = await Author.create({
            name, email, bio, profilePic, rating
        })

        return res.status(201).json({
            success: true,
            message: "Author created",
            data: author
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.getAuthors = async (req, res) => {
    try {
        const authors = await Author.find().sort({ createdAt: -1 })

        return res.status(200).json({
            success: true,
            message: "All author found",
            data: authors,
            count: authors.length
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
        console.log(error.message);

    }
}



exports.getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id)

        if (!author) {
            return res.status(404).json({
                success: false,
                message: "Author not found",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Author found",
            data: author,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

exports.updateAuthor = async (req, res) => {
    try {
        const { name, email, bio, profilePic, rating } = req.body

        const author = await Author.findById(req.params.id)
        if (!author) {
            return res.status(404).json({
                success: false,
                message: "Author not found",
            })
        }

        //? check if email already exist
        if (email && email !== author.email) {
            const existingEmail = await Author.findOne({ email })

            if (existingEmail) {
                return res.status(400).json({
                    success: false,
                    message: "Email already exist",
                })
            }
        }

        author.name = name || author.name
        author.email = email || author.email
        author.bio = bio || author.bio
        author.profilePic = profilePic || author.profilePic
        author.rating = rating || author.rating

        await author.save()
        return res.status(200).json({
            success: true,
            message: "Author Updated",
            data: author,
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.deleteAuthor = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id)
        if (!author) {
            return res.status(404).json({
                success: false,
                message: "Author not found",
            })
        }

        await author.deleteOne()
        return res.status(200).json({
            success: true,
            message: "Author Deleted Successfully",
            data: author,
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}