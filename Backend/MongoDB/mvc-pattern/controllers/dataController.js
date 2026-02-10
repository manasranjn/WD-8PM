const DataModel = require("../models/dataModel");

exports.createData = (req, res) => {
    const data = new DataModel(req.body);
    // console.log(data);

    data.save()
        .then(() => res.status(201).json({ message: 'Data saved successfully', content: data }))
        .catch(err => res.status(400).json({ error: err.message }));
}

exports.getData = async (req, res) => {
    try {
        const data = await DataModel.find();
        res.json({ message: 'Data received', data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
exports.getDataById = async (req, res) => {
    try {
        const data = await DataModel.findById(req.params.id);
        res.json({ message: 'Data received', data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.updateData = async (req, res) => {
    try {
        const data = await DataModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json({ message: 'Data updated successfully', data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.deleteData = async (req, res) => {
    try {
        const data = await DataModel.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json({ message: 'Data deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}