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
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        duration: {
            type: Number,
            required: "Time of the exercise."
        }
    }],
    totalDuration: {
        type: Number,
        trim: true,
        default: 0
    }
});

const workout = mongoose.model("WorkOut", workoutSchema);

module.exports = workout;