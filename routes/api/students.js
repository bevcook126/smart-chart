const express = require('express');
const router = express.Router();
const studentsCtrl = require('../../controllers/api/students');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.get('/', studentsCtrl.index);
router.post('/', studentsCtrl.create);
router.delete('/:id', studentsCtrl.deleteStudent);

// router.get('/:id', studentsCtrl.show);
// POST /api/users/login
module.exports = router;
