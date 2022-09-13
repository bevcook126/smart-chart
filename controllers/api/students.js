const jwt = require('jsonwebtoken');
const Student = require('../../models/student');

module.exports = {
  create,
  index,
  deleteStudent
};

async function create(req, res) {
  req.body.user = req.user._id;
  const student = await Student.create(req.body);
  res.json(student);
}

async function index(req, res) {
  const students = await Student.find({user: req.user._id})
  res.json(students);
}


async function deleteStudent(req, res) {
  const studentDel = await Student.findOneAndDelete({'_id': req.params.id, 'user': req.user._id});
    res.json(studentDel);
}