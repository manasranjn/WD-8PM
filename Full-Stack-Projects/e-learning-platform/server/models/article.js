const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
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
        ref: 'Author',
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Technology', 'Business', 'Daily News', 'Stocks']
    }
})

module.exports = mongoose.model('Article', articleSchema)