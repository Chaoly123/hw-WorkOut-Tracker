const router = require('express').Router();
const workOut = require('../models/workout');

router.post('/api/workout', ({ body }, res) => {
    workOut.create(body)
    .then(dbworkOut => {
        res.json(dbworkOut);
    })
    .catch(err => {
        res.status(400);
        console.log(err)
    });
});

