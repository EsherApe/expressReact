const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const User = require('../models/user').User;

router.post('/check_session', (req, res, next) => {
    if(req.session.user) {
        res.send({isLogin: true, userId: req.session.user})
    } else {
        next();
    }
});

router.post('/save', (req, res) => {
    console.log(req.session);
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
                birthday: user.birthday
            };
            res.send({text: 'User was successfully saved!', error: false, user: newUser});
        }
    })
});

router.post('/get_user', (req, res, next) => {
    User.findById(req.body.userId, (err, user) => {
        if(err) return next(err);
        return user;
    }).then(user => {
        if (user) {
            let respUser = {
                id: user._id,
                login: user.login,
                lastName: user.lastName,
                firstName: user.firstName,
                email: user.email,
                birthday: user.birthday,
                isLogin: true
            };
            res.send(respUser);
        } else {
            next(createError(403, 'User not found'));
        }
    })
});

module.exports = router;
