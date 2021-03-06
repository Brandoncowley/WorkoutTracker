const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    
    exercises: [{
        type: {
            type: String,
            required: 'Enter an exercise type'
        },
        name: {
            type: String,
            required: 'Enter exercise name'
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }],
    totalDuration: {
        type: Number,
        default: 0,
      }
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;