const Student = require('../models/student')

exports.createStudent = (req, res) => {
    const student = new Student(req.body)
    console.log(req.body);
    console.log(student);

    student.save()
        .then(() => res.status(201).json({ message: 'Student Created successfully', content: student }))
        .catch(err => res.status(400).json({ error: err.message }));
}

exports.getStudents = async (req, res) => {
    const student = await Student.find()
    res.json(student)
}