const User = require('../models/user').User;

module.exports = function (req, res, next) {
    if(!req.session.user) return next();

    User.findById(req.session.user, (err, user) => {
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
            // res.send(respUser);
        } else {
            next(createError(403, 'User not found'));
        }
    });

    next();
};