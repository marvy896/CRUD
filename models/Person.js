const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
        },
    });

module.exports = mongoose.model('Person', PersonSchema);