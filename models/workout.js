const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter the type of exercise."
        },
        name: {
            type: String,
            trim: true,
            required: "Name of the exercise."
        },
        weight: {
            type: INTEGER
        },
        sets: {
            type: INTEGER
        },
        reps: {
            type: INTEGER
        },
        duration: {
            type: INTEGER,
            required: "Time of the exercise."
        }
    }]
});

const workout = mongoose.model("WorkOut", workoutSchema);

module.exports = workout;