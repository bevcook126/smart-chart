const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const roomSchema = new Schema({
  user: {type:Schema.Types.ObjectId, ref: 'User'},
  layout: { type: Array, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Room', roomSchema);