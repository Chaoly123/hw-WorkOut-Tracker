const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    } catch (err) {
        res.status(400);
        console.log(err)
    }
});

router.get('/stats', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/stats.html'))
    } catch (err) {
        res.status(400);
        console.log(err)
    }
});

router.get('/exercise', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/exercise.html'))
    } catch (err) {
        res.status(400);
        console.log(err)
    }
});

module.exports = router;