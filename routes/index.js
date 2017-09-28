const express = require('express');
const router = express.Router();
const User = require('../models/user').User;

router.get('/', (req, res, next) => {
    if(req.session.user) {
        User.findById(req.session.user, (err, user) => {
            if(err) return next(err);
            return user;
        }).then(user => {
            let respUser = {
                id: user._id,
                login: user.login,
                lastName: user.lastName,
                firstName: user.firstName,
                email: user.email,
                birthday: user.birthday,
                isLogin: true
            };
            console.log(respUser);
            res.send(respUser);
        });
    }
    res.render('index');
});

module.exports = router;
