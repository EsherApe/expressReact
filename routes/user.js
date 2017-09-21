const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

router.post('/save', (req, res) => {
    console.log(req.body);

    res.send('User was successfully saved!');
    return 'user was saved!';
});

module.exports = router;
