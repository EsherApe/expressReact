const express = require('express');
const morgan = require('morgan');
const logger = require('./utils/winston');
const bodyParser = require('body-parser');
const app = express();

//import routes
const index = require('./routes/index');
const user = require('./routes/user');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//config templates
app.set('view engine', 'pug');

//express static folder
app.use('/static', express.static(__dirname + '/client/static'));

//routes
app.use('*', index);
app.use('/user', user);

//port settings
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => logger.info(`listening on port ${PORT}`));