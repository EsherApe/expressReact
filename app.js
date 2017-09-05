const express = require('express');
const morgan = require('morgan');
const logger = require('./utils/winston');
const app = express();

//import routes
const index = require('./routes/index');

//set logger config
app.use(morgan('dev'));

//config templates
app.set('view engine', 'pug');

// express static folder
app.use('/static', express.static(__dirname + '/public'));

// queries
app.use('*', index);

// port settings
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => logger.info(`listening on port ${PORT}`));