const { model } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    age: Number,
    sex: { type: Number, default: 0 }
});

const User = mongoose.model('user', userSchema);

module.exports = User