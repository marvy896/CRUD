import express from 'express';
import { connect } from 'mongoose';
import { json } from 'body-parser';
import cors from 'cors';
import Person, { findById, findByIdAndUpdate, findByIdAndRemove } from './models/Person.js';


const app = express();
app.use(json());
app.use(cors());

const PORT = process.env.PORT || 3000;
connect('mongodb://localhost/marvy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Create a new person
app.post('/api/people', async (req, res) => {
  try {
    const person = new Person(req.body);
    await person.save();
    res.json(person);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a person by ID
app.get('/api/people/:id', async (req, res) => {
  try {
    const person = await findById(req.params.id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a person by ID
app.put('/api/people/:id', async (req, res) => {
  try {
    const person = await findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a person by ID
app.delete('/api/people/:id', async (req, res) => {
  try {
    const person = await findByIdAndRemove(req.params.id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json({ message: 'Person deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
