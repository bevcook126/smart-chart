const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deskSchema = require('./desk');

const roomSchema = new Schema({
  // desk : deskSchema,
  layout: { type: Array, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Room', roomSchema);