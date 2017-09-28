const express = require('express');
const router = express.Router();
const User = require('../models/user').User;

router.get('/', (req, res, next) => {
    if(req.session.user) {
        User.findById(req.session.user, (err, user) => {
            if(err) return next(err);
            return user;
        }).then(user => {
            res.send(user);
        });
    }
    res.render('index');
});

module.exports = router;
