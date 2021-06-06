
const Workout = require("../models/workout");
const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


router.get("/api/workouts", function (req, res) {
    Workout.find()
        .then(workoutdb => {
            res.json(workoutdb)
        })
        .catch(err => {
            res.json(err)
        })
});


router.post("/api/workouts", function (req, res) {
    Workout.create({
    }).then(workoutdb =>
        res.json(workoutdb)
    ).catch(err => {
        res.json(err)
    })
});

router.get("/api/workouts/range", function (req, res) {
    Workout.find()
        .then(workoutdb => {
            res.json(workoutdb)
        })
        .catch(err => {
            res.json(err)
        })
});


router.post("/api/workouts/range", function (req, res) {
    Workout.create({
    }).then(workoutdb =>
        res.json(workoutdb)
    ).catch(err => {
        res.json(err)
    })
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { 
            $push: { exercises: body } 
        },
        {
            new: true, runValidators: true
        }).then(workoutdb =>
            res.json(workoutdb)
        ).catch(err => {
            res.json(err)
        })
});




module.exports = router;
