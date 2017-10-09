const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const User = require('../models/user').User;

router.post('/check_login', (req, res, next) => {
    if(!req.session.user) return;
    res.send({isLogin: true, userId: req.session.user});
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
        gender: req.body.gender,
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
                gender: req.body.gender,
                birthday: user.birthday
            };
            res.send({text: 'User was successfully saved!', error: false, user: newUser});
        }
    })
});

router.post('/get_user', (req, res, next) => {
    console.log(req.body.userId);
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
                fullName: `${user.firstName} ${user.lastName}`,
                email: user.email,
                gender: req.body.gender,
                avatar: user.avatar,
                about: user.about,
                location: user.location,
                messengers: user.messengers,
                friends: user.friends,
                birthday: user.birthday
            };
            res.send(respUser);
        } else {
            next(createError(403, 'User not found'));
        }
    })
});

router.post('/search', (req, res, next) => {
    let name = req.body.name.toLowerCase().replace(/\s/g,'');

    User.aggregate(
        {$project:{
            fullName:{
                $substr: [{$concat:[{$toLower: "$firstName"}, {$toLower: "$lastName"}]}, 0, name.length]
            },
            fullNameReverse:{
                $substr: [{$concat:[{$toLower: "$lastName"}, {$toLower: "$firstName"}]}, 0, name.length]
            },
            userId: '$_id',
            avatar: '$avatar',
            login: '$login',
            lastName: '$lastName',
            firstName: '$firstName',
            about: '$about',
            location: '$location'
        }},
        {$match: {$or: [{fullName: name}, {fullNameReverse: name}]}}
    ).then(resp => {
        let matches = [];
        resp.forEach(user => {
            matches.push({
                userId: user.userId,
                login: user.login,
                avatar: user.avatar,
                location: user.location,
                about: user.about,
                fullName: `${user.firstName} ${user.lastName}`
            });

            console.log(matches);
        });

        res.send(matches);

    });
});

router.post('/add_to_friends', (req, res, next) => {

    User.findByIdAndUpdate(
        req.body.userId,
        {$push: {"friends": req.body.userToFriends}},
        {safe: true, upsert: true, new: true},
        (err, user) => {
            console.log(err);
            let respUser = {
                friends: user.friends
            };
            res.send(respUser)
        }
    );
});

module.exports = router;
