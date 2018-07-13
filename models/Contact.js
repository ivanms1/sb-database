const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let ContactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    phone: String,
    address: String,
    muban: String,
    tambon: String,
    organization: String
});

module.exports = Contact = mongoose.model('contacts', ContactSchema);