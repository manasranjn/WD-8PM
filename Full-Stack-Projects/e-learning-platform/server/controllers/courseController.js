const Course = require('../models/course')
const Author = require('../models/author')

//! Create Course
exports.createCourse = async (req, res) => {
    try {
        const { title, description, images, author, category, price } = req.body

        //? Validate Required Fields
        if (!title || !description || !images || !author || !category || price === undefined) {
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

        const course = await Course.create({
            title,
            description,
            images,
            author,
            category,
            price
        })

        return res.status(201).json({
            success: true,
            message: "Course created successfully",
            data: course
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}



//! Get All Courses
exports.getCourses = async (req, res) => {
    try {

        const courses = await Course.find()
            .populate('author', 'name email profilePic rating')
            .sort({ createdAt: -1 })

        return res.status(200).json({
            success: true,
            message: "All courses fetched",
            count: courses.length,
            data: courses
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


//! Get Course By ID
exports.getCourseById = async (req, res) => {
    try {

        const course = await Course.findById(req.params.id)
            .populate('author', 'name email profilePic rating')

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Course found",
            data: course
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}



//! Update Course
exports.updateCourse = async (req, res) => {
    try {

        const { title, description, images, author, category, price } = req.body

        const course = await Course.findById(req.params.id)
        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found"
            })
        }

        //? If author is updated- validate
        if (author && author !== course.author.toString()) {
            const existAuthor = await Author.findById(author)
            if (!existAuthor) {
                return res.status(404).json({
                    success: false,
                    message: "New author not found"
                })
            }
        }

        //? Update Fields
        course.title = title || course.title
        course.description = description || course.description
        course.images = images || course.images
        course.author = author || course.author
        course.category = category || course.category
        course.price = price !== undefined ? price : course.price

        await course.save()

        return res.status(200).json({
            success: true,
            message: "Course updated successfully",
            data: course
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}



//! Delete Course
exports.deleteCourse = async (req, res) => {
    try {

        const course = await Course.findById(req.params.id)

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found"
            })
        }

        await course.deleteOne()

        return res.status(200).json({
            success: true,
            message: "Course deleted successfully",
            data: course
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}