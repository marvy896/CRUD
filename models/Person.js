import { Schema, model } from 'mongoose';

const personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
});

// Sample data for demonstration 
const people = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
];

// Function to find a person by ID
export function findById(id) {
  return people.find((person) => person.id === id);
}

// Function to update a person by ID
export function findByIdAndUpdate(id, newData) {
  const index = people.findIndex((person) => person.id === id);

  if (index !== -1) {
    // Update the person with the new data
    people[index] = { ...people[index], ...newData };
    return people[index];
  }

  return null; 
}

export function findByIdAndRemove(id) {
  const index = people.findIndex((person) => person.id === id);

  if (index !== -1) {
    const removedPerson = people.splice(index, 1);
    return removedPerson[0];
  }

  return null;
}

export default model('Person', personSchema);
