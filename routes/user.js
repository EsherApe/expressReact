const express = require('express');
const router = express.Router();
const User = require('../models/user').User;

router.post('/save', (req, res) => {
    if(!req.body) return req.sendStatus(400);

    const user = new User({
        login: req.body.login,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        birthday: req.body.birthday
    });

    user.save((err, user) => {
        if (err) {
            if(err.code === '11000') {
                console.log(err);
                res.send({text: 'User is exist', error: true})
            }
        }

        res.send({text: 'User was successfully saved!', error: false});
    })
});

module.exports = router;
