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

    user.save((err, user, affected) => {
        if (err) {
            console.log(err);
        }

        User.findOne({login: 'esherape'}, (err, user) => {
            console.log(user);
        })
    });

    res.send('User was successfully saved!');
});

module.exports = router;
