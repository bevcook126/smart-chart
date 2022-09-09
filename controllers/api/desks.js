const jwt = require('jsonwebtoken');
const Desk = require('../../models/desk');

module.exports = {
  index,
  update
//   show
};

async function update(req, res) {
    req.body.user = req.user_id;
    const desk = await Desk.update(req.body);
    res.json(desk);
}

async function index(req, res) {
    const desks = await Desk.find({user: req.user._id})
    res.json(desks);
}


// async function show(req, res) {
//     const item = await Student.findById(req.params.id);
//     res.json(student);
//   }