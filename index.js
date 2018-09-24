const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const pug = require('pug');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieParser());
app.use('/static', express.static('public'));

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.set('view engine', 'pug');

app.use(mainRoutes);
app.use('/cards', cardRoutes)

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status);
  res.render('error', {'error': err});
});

app.listen(3000);
