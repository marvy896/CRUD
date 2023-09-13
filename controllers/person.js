import { create, findById, findByIdAndUpdate, findByIdAndDelete } from '../models/Person';

const createPerson = async (req, res) => {
    // Get name from request body
    const { name } = req.body;
    const person = await create({ name });
    res.status(201).json({ person });
};


const getPerson = async (req, res) => {
    const PersonId = req.params.id;
    try {
        // Find person in the database
        const person = await findById(PersonId);
        // Validate if person is found
        if (person) {
            res.status(200).json({ person });
        } else {
            res.status(404).json({ message: 'Person not found' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
}};

const updatePerson = async (req, res) => {
    const personId = req.params.id;
    const { name } = req.body;
    try {
        // Validate input
        if (!name || typeof name !== 'string') {
            return res.status(400).json({ message: 'Invalid data' });
        }
        // Find and update person in the database
        const updatedPerson = await findByIdAndUpdate(
            personId,
            { name },
            { new: true }
        );
        // Validate if person is found
        if (updatedPerson) {
            res.status(200).json({ person: updatedPerson });
        } else {
            res.status(404).json({ message: 'Person not found' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
}};

const deletePerson = async (req, res) => {
    const personId = req.params.id;
    try {
        // Find and delete person in the database
        const deletedPerson = await findByIdAndDelete(personId);
        // Validate if person is found
        if (deletedPerson) {
            res.status(200).json({ person: deletedPerson });
        } else {
            res.status(404).json({ message: 'Person not found' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
}};


export default {
    createPerson,
    getPerson, 
    updatePerson,
    deletePerson,
};
