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

export default model('Person', personSchema);
