const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classroomSchema = require('./classroomSchema');
const studentSchema = require('./studentSchema');

const deskSchema = new Schema({
  img: {type: String},
}, {
  timestamps: true
});

module.exports = mongoose.model('Desk', deskSchema);