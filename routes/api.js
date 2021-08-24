const router = require('express').Router();
const workOut = require('../models/workout');

router.post('/api/workouts', ({ body }, res) => {
    workOut.create(body)
        .then(dbworkOut => {
            res.json(dbworkOut);
        })
        .catch(err => {
            res.status(400);
            console.log(err)
        });
});

router.get('/api/workouts', (req, res) => {
    workOut.aggregate([
        { $addFields: { 'totalDuration': { $sum: '$exerices.duration' } } }
    ])
        .then(dbworkOut => {
            res.json(dbworkOut);
        })
        .catch(err => {
            res.json(400);
            console.log(err)
        })
});

router.get('/api/workouts/range', (req, res) => {
    workOut.aggregate([
        { $addFields: { 'totalDutation': { $sum: '$exercise.duration' } } }
    ])
        .then(dbworkOut => {
            res.json(dbworkOut)
        })
        .catch(err => {
            res.json(400);
            console.log(err)
        })
});


router.put('/api/workouts/:id', ({ body, params }, res) => {
    workOut.findOneAndUpdate(
        { _id: params.id },
        { $push: { exercises: body } },
        { new: true })
        .then(dbworkOut => {
            res.json(dbworkOut);
        })
        .catch(err => {
            res.json(400);
            console.log(err)
        });
});

module.exports = router;