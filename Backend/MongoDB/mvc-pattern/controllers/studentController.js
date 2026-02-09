const Student = require('../models/student')

exports.createStudent = async (req, res) => {
    Student.create({
        name: "ABC",
        age: 12,
        rollNo: '123CD56',
        subject: "MongoDB"
    })
}

exports.getStudent = async (req, res) => {
    const student = await Student.find()
    res.json(student)
}