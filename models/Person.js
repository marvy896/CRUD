import { Schema, model } from 'mongoose';

const PersonSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
        },
    });

export default model('Person', PersonSchema);