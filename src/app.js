const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

const app = express();
const controller = require('./controllers/mainController');

app.set('port', process.env.PORT || 4000);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main',
}));

app.use(controller);

module.exports = app;
