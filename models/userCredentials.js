const mongoose = require('mongoose')

//schema 
const credentialsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

//model
const credentialsModel = mongoose.model('signUP', credentialsSchema);

module.exports = {
    credentialsModel,
}