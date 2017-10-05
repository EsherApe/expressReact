const crypto = require('crypto');
const util =require('util');
const mongoose = require('../utils/mongoose'),
      Schema = mongoose.Schema;

const schema = new Schema({
    avatar: {
        type: String,
        default: '/static/img/avatar-2.png'
    },
    login: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    gender: {
        type: String
    },
    hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

schema.methods.encryptPassword = function (password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

schema.virtual('password')
    .set(function (password) {
        this._plainPassword = password;
        this.salt = Math.random() + '';
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function () {
        return this._plainPassword
    });

schema.methods.checkPasswords = function (password) {
    return this.encryptPassword(password) === this.hashedPassword;
};

schema.statics.authorize = function (email, password, callback) {
    let User = this;

    User.findOne({email: email}, (err, user) => {
        if (err) callback(err);
        return user;
    }).then((user) => {
        if (user) {
            if (user.checkPasswords(password)) {
                callback(null, user);
            } else {
                callback(new AuthError('Wrong password!'));
            }
        } else {
            callback(new AuthError('This user does not exist!'));
        }
    }).catch(err => {
        console.error(err);
    })
};

//authorization error
function AuthError(message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, AuthError);

    this.message = message;
}
util.inherits(AuthError, Error);
AuthError.prototype.name = "AuthError";

exports.AuthError = AuthError;
exports.User = mongoose.model('User', schema);