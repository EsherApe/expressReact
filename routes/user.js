const express = require('express');
const router = express.Router();

router.post('/save', (req, res) => {
    if(!req.body) return req.sendStatus(400);
    console.log(req.body);

    res.send('User was successfully saved!');
    return 'user was saved!';
});

module.exports = router;
