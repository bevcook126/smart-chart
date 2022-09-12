const jwt = require('jsonwebtoken');
const Student = require('../../models/student');

module.exports = {
  create,
  index,
  deleteStudent
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


async function deleteStudent(req, res, next) {
  try {
    const student = await Student.findOne({'student._id': req.params.id, 'students.user': req.user._id});
    if (!student) throw new Error('Nice Try!');
    student.remove(req.params.id);
    await student.save();
    res.redirect('/');
  } catch (err) {
    return next(err);
  }
}