const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const User = require('../models/user').User;

router.post('/save', (req, res) => {
    if(!req.body) return req.sendStatus(400);

    const user = new User({
        login: req.body.login,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthday: req.body.birthday
    });

    user.set('password', req.body.password);
    user.save((err, user) => {
        if (err) {
            if(err.code == 11000) {
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

router.post('/login', (req, res, next) => {
    let password = req.body.password,
        email = req.body.email;

    User.findOne({email: email}, (err, user) => {
        if (err) return next(err);
        return user;
    }).then((user) => {
        if (user) {
            if(user.checkPasswords(password)) {
                return user;
            } else {
                res.send({error: true, message: 'Wrong E-mail or password'});
                next(createError(403, 'Wrong E-mail or password'));
            }
        } else {
            res.send({error: true, message: 'Wrong E-mail or password'});
            next(createError(403, 'Wrong E-mail or password'));
        }
    }).then(user => {
        let loggedUser = {
            id: user._id,
            login: user.login,
            lastName: user.lastName,
            firstName: user.firstName,
            email: user.email,
            birthday: user.birthday,
            isLogin: true
        };
        res.send(loggedUser);
    }).catch(err => {console.log(err);})
});

module.exports = router;
