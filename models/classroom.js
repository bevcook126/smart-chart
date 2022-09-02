const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classroomSchema = new Schema({
  number: { type: String, required: true },
  layout: {type: Array, required: true },
  roster: {type: Array, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Classroom', classroomSchema);