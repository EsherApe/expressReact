const express = require('express');
const HttpError = require('../error').HttpError;
const AuthError = require('../models/user').AuthError;
const router = express.Router();
const User = require('../models/user').User;

router.post('/login', (req, res, next) => {
    let password = req.body.password,
        email = req.body.email;

    User.authorize(email, password, function(err, user) {
        if(err) {
            if(err instanceof AuthError) {
                return res.send({error: 403, message: 'Wrong E-mail or password'});
            }
            return next(err);
        }

        req.session.user = user._id;
        req.session.email = email;
        req.session.password = password;
        res.send({isLogin: true, userId: user._id});
    });
});

router.post('/logout', (req, res, next) => {
    req.session.destroy();
    console.log('logout');
});

module.exports = router;