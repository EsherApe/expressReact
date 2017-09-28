const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const User = require('../models/user').User;

router.post('/login', (req, res, next) => {
    let password = req.body.password,
        email = req.body.email;

    function sendError() {
        res.send({error: 403, message: 'Wrong E-mail or password'});
        next(createError(403, 'Wrong E-mail or password'));
    }

    User.findOne({email: email}, (err, user) => {
        if (err) return next(err);
        return user;
    }).then((user) => {
        if (user) {
            if (user.checkPasswords(password)) {
                return user;
            } else {
                sendError();
            }
        } else {
            sendError();
        }
    }).then(user => {
        req.session.user = user._id;
        res.send({isLogin: true, userId: user._id});
    }).catch(err => {
        console.log(err);
    })
});

router.post('/logout', (req, res, next) => {
    req.session.destroy();
    console.log('logout');
});

module.exports = router;