const db = require('../models')
module.exports = (app) => {

    //get all workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, workouts) => {
            if(err){
                console.log(err);
            } else {
                res.json(workouts)
            }
        });
    });
    //add excerise, give an id, push to model, set true
    app.put("/api/workouts/:workout", ({ params, body }, res) => {
        db.Workout.findOneAndUpdate({ _id: params.id},
                                    {$push: {excercises:body }},
                                    { upsert: true, useFindandModify:false},
                                    updatedWorkout => {
                                        res.json(updatedWorkout);
                                    })
    });
    //create new workout - important!
    app.post('/api/workouts', (req,res) => {
        db.Workout.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });

}