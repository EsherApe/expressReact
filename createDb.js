const mongoose = require('./utils/mongoose');
const co = require('co');
mongoose.set('debug', true);

console.log(mongoose.connection.readyState);

function open() {
    return new Promise((resolve) => {
        mongoose.connection.on('open', resolve);
    });
}

function dropDatabase() {
    return new Promise((resolve) => {
        let db = mongoose.connection.db;
        db.dropDatabase(resolve);
    });
}

function* createUsers() {
    const User = require('./models/user').User;

    yield new Promise((resolve) => {
        mongoose.models.User.on('index', resolve);
    });

    let userPromises = [
        {
            avatar: '/static/img/avatar-0.png',
            login: 'esher',
            firstName: 'Andrew',
            lastName: 'Bazilskiy',
            password: '55801989',
            email: 'esher5580@gmail.com',
            gender: 'male',
            birthday: '01.04.89 0:00:00 UTC'
        },
        {
            login: '/static/img/avatar-3.png',
            firstName: 'Tania',
            lastName: 'Kalashnik',
            password: '55801989',
            email: 'kalashnik@gmail.com',
            gender: 'female',
            birthday: '01.04.89 0:00:00 UTC'
        },
        {
            login: '/static/img/avatar-1.png',
            firstName: 'Dima',
            lastName: 'Bazilskiy',
            password: '55801989',
            email: 'dima@gmail.com',
            gender: 'male',
            birthday: '01.04.89 0:00:00 UTC'
        }
    ].map(userData => {
        let user = new User(userData);
        return user.save();
    });

    let users = yield Promise.all(userPromises);

    return users;
}

function close() {
    mongoose.disconnect();
    return Promise.resolve();
}

co(function* () {
    try {
        yield open();
        yield dropDatabase();
        let users = yield* createUsers();
        console.log(users);
    } catch (e) {
        throw e;
    } finally {
        yield close();
    }

    return "Done";
}).then(value => console.log(value), err => console.log(err.stack));