
const express = require('express');
const router = express.Router();
const roomsCtrl = require('../../controllers/api/rooms');
const ensureLoggedin = require("../../config/ensureLoggedIn")

router.get('/', roomsCtrl.index);

router.put('/', ensureLoggedin, roomsCtrl.update)

module.exports = router;