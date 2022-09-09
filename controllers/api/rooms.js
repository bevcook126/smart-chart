const Room = require("../../models/room")

module.exports = {
    index,
    update
  };


async function index(req, res) {
    // if (!req || !req.user) {
    //   return res.json({error: "no user"})
    // }
    const rooms = await Room.findOne({user: req.user._id})
    console.log('rooms', rooms)
    res.json(rooms);
  }

// async function create(req, res) {
//     const room = await Room.create(req.body)
//     res.json(room)
// }

async function update(req, res) {
    console.log('controller function running');
    const room = await Room.findOneAndUpdate(
        { user: req.user._id },
        { user: req.user._id },
        { upsert: true, new: true }
    );
    room.layout = req.body;
    room.save()
    console.log(room)
    res.json(room)
  }