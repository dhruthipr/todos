const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum: ['todo','done'],
        default:'todo'
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('Todo',TodoSchema);