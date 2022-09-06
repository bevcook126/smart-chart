const express = require('express');
const router = express.Router();
const studentsCtrl = require('../../controllers/api/students');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', studentsCtrl.create);
router.get('/', studentsCtrl.index);
// POST /api/users/login
module.exports = router;
