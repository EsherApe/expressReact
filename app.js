const express = require('express');
const morgan = require('morgan');
const logger = require('./utils/winston');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const config = require('./config');
const mongoose = require('./utils/mongoose');
const app = express();

//import routes
const index = require('./routes/index');
const login = require('./routes/login');
const user = require('./routes/user');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/static', express.static(__dirname + '/client/static'));

//config templates
app.set('view engine', 'pug');

const MongoStore = require('connect-mongo')(session);
const mongoose_store = new MongoStore({mongooseConnection: mongoose.connection});
app.use(session({
    secret: config.get('session:secret'),
    key: config.get('session:key'),
    saveUninitialized: false,
    resave: false,
    store: mongoose_store,
    cookie: config.get('session:cookie')
}));

//middleware
// app.use(require('./middleware/loadUser'));

//routes
app.use('*', index);
app.use('/', login);
app.use('/user', user);

// error handler
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.send(500);
});

//port settings
const PORT = process.env.PORT || config.get('port');
app.listen(PORT, () => logger.info(`listening on port ${PORT}`));