const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => 
    }
})


module.exports = workout;