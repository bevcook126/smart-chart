const jwt = require('jsonwebtoken');
const Student = require('../../models/student');

module.exports = {
  create,
  index
};

async function create(req, res) {
    req.body.user = req.user_id;
    const student = await Student.create(req.body);
    console.log(student, "student controller")
    res.json(student);
}

async function index(req, res) {
    const students = await Student.find({user: req.user._id})
    res.json(students);
}