const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: String,
    value: Number
});

const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;

// module.exports = mongoose.model('Data', dataSchema);