import express from 'express';
const router = express.Router();
import * as personController from '../controllers/person.js';

router.route('/').post(personController.createPerson);
router.route('/:id').get(personController.getPerson).patch(personController.updatePerson).delete(personController.deletePerson);

export default router;
