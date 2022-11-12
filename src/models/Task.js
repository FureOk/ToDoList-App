const {Schema, model} = require('mongoose');

const taskSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20  
    },
    _id: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 3

    },
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    }, 
    description: {
        type: String,
        required: true,
        minlength: 4,
    },
    },
    { timestamps: true }
);

const taskModel = model("tasks", taskSchema);

module.exports = taskModel;