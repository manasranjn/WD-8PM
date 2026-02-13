const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required"],
        trim: true,
        minlength: [2, "Name at least contain 2 Characters"],
        maxlength: [50, "Name can't exceed 50 Characters"]
    },
    bio: {
        type: String,
        required: true,
        trim: true,
    },
    profilePic: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    }
})

module.exports = mongoose.model('Author', authorSchema)