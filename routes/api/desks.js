const express = require('express');
const router = express.Router();
const desksCtrl = require('../../controllers/api/desks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.get('/', desksCtrl.index);

// router.get('/:id', studentsCtrl.show);
// POST /api/users/login
module.exports = router;