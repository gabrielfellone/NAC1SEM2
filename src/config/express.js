require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/resource', express.static('src/app/public'));

const routes = require('../app/routes/routes');
routes(app);

module.exports = app;