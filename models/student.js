const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  img: {type: String, required: true },
  notes: {type: Text},
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);