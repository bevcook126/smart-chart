const Room = require("../../models/room")

module.exports = {
  index,
  update
};


async function index(req, res) {
  const rooms = await Room.findOne({user: req.user._id})
  res.json(rooms);
}

async function update(req, res) {
  const room = await Room.findOneAndUpdate(
      { user: req.user._id },
      { user: req.user._id },
      { upsert: true, new: true }
  );
  room.layout = req.body;
  room.save()
  res.json(room)
}