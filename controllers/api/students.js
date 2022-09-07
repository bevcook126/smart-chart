const jwt = require('jsonwebtoken');
const Student = require('../../models/student');

module.exports = {
  create,
  index,
//   show
};

async function create(req, res) {
    req.body.user = req.user_id;
    const student = await Student.create(req.body);
    res.json(student);
}

async function index(req, res) {
    const students = await Student.find({user: req.user._id})
    res.json(students);
}

// async function show(req, res) {
//     const item = await Student.findById(req.params.id);
//     res.json(student);
//   }