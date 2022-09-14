const express = require('express');
const router = express.Router();
const studentsCtrl = require('../../controllers/api/students');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', studentsCtrl.index);
router.post('/', studentsCtrl.create);
router.delete('/:id', studentsCtrl.deleteStudent);

module.exports = router;
