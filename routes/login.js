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
        let loggedUser = {
            id: user._id,
            login: user.login,
            lastName: user.lastName,
            firstName: user.firstName,
            email: user.email,
            birthday: user.birthday,
            isLogin: true
        };
        req.session.user = loggedUser.id;
        res.send(loggedUser);
    }).catch(err => {
        console.log(err);
    })
});

router.post('/logout', (req, res, next) => {
    req.session.destroy();
    console.log('logout');
});

module.exports = router;