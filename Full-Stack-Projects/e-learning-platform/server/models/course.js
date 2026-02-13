const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Technology', 'Business', 'Personality Developement', 'Arts and Humanities', 'Language Learning']
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
})

module.exports = mongoose.model('Course', courseSchema)