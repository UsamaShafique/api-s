const mongoose = require('mongoose');

const signupSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('signup', signupSchema);