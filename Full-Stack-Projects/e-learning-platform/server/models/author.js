const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required"],
        trim: true,
        minlength: [2, "Name at least contain 2 Characters"],
        maxlength: [50, "Name can't exceed 50 Characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        maxlength: [50, "Email can't exceed 50 Characters"]
    },
    bio: {
        type: String,
        maxlength: [500, "Bio can't exceed 500 Characters"]
    },
    profilePic: {
        type: String,
        required: [true, "Profile picture is required"],
    },
    rating: {
        type: Number
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Author', authorSchema)