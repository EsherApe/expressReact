const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const User = require('../models/user').User;

router.post('/save', (req, res) => {
    if (!req.body) return req.sendStatus(400);

    const user = new User({
        login: req.body.login,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthday: req.body.birthday,
        password: req.body.password
    });

    user.save((err, user) => {
        if (err) {
            if (err.code == 11000) {
                res.setHeader('Content-Type', 'text/html');
                res.send({text: 'This user is already exist!', error: true});
            }
        } else {
            let newUser = {
                id: user._id,
                login: user.login,
                lastName: user.lastName,
                firstName: user.firstName,
                email: user.email,
                birthday: user.birthday,
                isLogin: true
            };
            res.send({text: 'User was successfully saved!', error: false, user: newUser});
        }
    })
});

module.exports = router;
