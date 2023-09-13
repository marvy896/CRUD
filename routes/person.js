const express = require('express');
const router = express.Router();
const { createPerson, getPerson, updatePerson, deletePerson } = require('../controllers/person');

router.route('/').post(createPerson);
router.route('/:id').get(getPerson).patch(updatePerson).delete(deletePerson);

module.exports = router;
