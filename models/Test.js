const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = require('./User')

const testSchema = new Schema({
    title: String,
    content: String,
    keys: [String],
    
});

mongoose.model('tests',testSchema );