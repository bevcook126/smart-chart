const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classroomSchema = require('./classroomSchema');
const studentSchema = require('./studentSchema');

const rosterSchema = new Schema({
  course: {type: String, require: true},
  period: {type: String},
  classroom: classroomSchema,
  students: studentSchema
}, {
  timestamps: true
});

module.exports = mongoose.model('Roster', rosterSchema);