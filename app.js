const express = require('express');
const morgan = require('morgan');
const logger = require('./utils/winston');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config');
const app = express();

//import routes
const index = require('./routes/index');
const user = require('./routes/user');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static(__dirname + '/client/static'));

//config templates
app.set('view engine', 'pug');

//routes
app.use('*', index);
app.use('/user', user);

//port settings
const PORT = process.env.PORT || config.get('port');
app.listen(PORT, () => logger.info(`listening on port ${PORT}`));