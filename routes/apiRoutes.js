const db = require('../models')
module.exports = (app) => {

    //get all workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            dbWorkout.forEach(workout => {
                var total = 0;
                workout.exercises.forEach(e => {
                        total += e.duration;
                });
                workout.totalDuration = total;
            });
    
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });

    //add excerise, give an id, push to model, set true
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findOneAndUpdate(
            { _id: req.params.id },
            {
                $inc: { totalDuration: req.body.duration },
                $push: { exercises: req.body }
            },
            { new: true }).then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });
    });
    //create new workout - important!
    app.post('/api/workouts', (req,res) => {
        db.Workout.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });

    app.get('/api/workouts/range', (req, res) => {
        db.Workout.aggregate([{
            $addFields:{
                totalDuration:{
                    $sum:'$exercises.duration'
                }
            }
        }]).then ((workouts) => {
            res.json(workouts)
        }).catch((err) => {
            res.json(err)
        })
    });

}

