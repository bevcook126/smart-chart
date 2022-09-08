const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = require('./student');

const deskSchema = new Schema({
  student: studentSchema,
}, {
  timestamps: true
});

module.exports = mongoose.model('Desk', deskSchema);