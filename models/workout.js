const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
            },
            type: {
                type: String,
                trim: true,
            },
            weight: {
                type: Number,
                default: 0
            },
            sets: {
                type: Number,
                default: 0
            },
            reps: {
                type: Number,
                default: 0
            },
            distance: {
                type: Number,
                default: 0
            },
            duration: {
                type: Number,
            }
        }
    ],
    },
    {
        //set to true to show on client side
        toJSON: {
            virtuals: true
        }
    });


workoutSchema.virtual("totalDuration").get(function () 
    {
    return this.exercises.reduce(( total, exercise ) => 
    {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
