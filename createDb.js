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
            location: 'Odessa, Levitana 15/4',
            about: 'Web-developer at WebWay',
            messengers: {
                skype: 'andrew.bazilskiy',
                telegram: '@bazilskiy'
            },
            friends: [],
            birthday: new Date('04/01/1989')
        },
        {
            avatar: '/static/img/avatar-3.png',
            login: 'Zhuk',
            firstName: 'Tania',
            lastName: 'Kalashnik',
            password: '55801989',
            email: 'kalashnik@gmail.com',
            gender: 'female',
            location: 'Odessa, Levitana 15/4',
            about: 'Footwear designer at "Welfare"',
            messengers: {
                skype: 'tania.kalashnik',
                telegram: '@kalashnik'
            },
            friends: [],
            birthday: new Date('01/24/1990')
        },
        {
            avatar: '/static/img/avatar-1.png',
            login: 'Slash',
            firstName: 'Dima',
            lastName: 'Bazilskiy',
            password: '55801989',
            email: 'dima@gmail.com',
            gender: 'male',
            location: 'Odessa, Tereshkovoi 8a',
            about: 'Student at "ONAFT"',
            messengers: {
                skype: 'dima.bazilskiy',
                telegram: '@dimabazilskiy'
            },
            friends: [],
            birthday: new Date('05/31/1997')
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