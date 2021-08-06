const router = require('express').Router();
const workOut = require('../models/workout');

router.post('/api/workout', ({ body }, req, res) => {
    workOut.create(body)
    .then(dbworkOut => {
        res.json(dbworkOut);
    })
    .catch(err => {
        res.status(400);
        console.log(err)
    });
});

router.get('./api/workout/range', (req, res) => {
    workOut.aggregate([
        {$addFiels: { 'totalDutation': {$sum: '$exercise.duration'}}}
    ])
    .then(dbworkOut => {
        res.json(dbworkOut)
    })
    .catch(err => {
        res.json(400);
        console.log(err)
    })
});


router.put('/api/workouts/:id', ({ body, params }, req, res) => {
    workOut.findOneAndUpdate(
        { _id: params.id },
        { $push: { exerices: body } },
        { new: true })
        .then(dbworkOut => {
            res.json(dbworkOut);
        })
        .catch(err => {
            res.json(400);
            console.log(err)
        });
});
