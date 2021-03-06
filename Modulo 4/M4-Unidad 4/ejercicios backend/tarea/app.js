var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// tarea
// Programar una ruta que varie el contenido de su respuesta en base a un parámetro recibido

app.use(session( {
  secret: 'noesningunsecreto123',
  resave: false,
  saveUninitialized: true
}))

app.use(function (req, res, next) {
  if (!req.session.vistas) {
    req.session.vistas = {};
  }
  if (!req.session.vistas[req.originalUrl]) {
    req.session.vistas[req.originalUrl] = 1;
  } else {
    req.session.vistas[req.originalUrl]++;
  }
  next();
});

app.get('/tarea', function(req, res) {
  res.render('pagina')
})

app.post('/ingresar', function (req, res) {
  req.session.nombre2 = req.body.nombre2;
  res.render('pagina', {
    nombre: ` Vistas de: `,
    nombre2: req.session.nombre2,
    vistas: req.session.vistas[req.originalUrl]
  });
});

// fin tarea

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
