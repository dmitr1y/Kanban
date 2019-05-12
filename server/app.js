var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
bodyParser = require('body-parser');
jwt = require('jsonwebtoken');
const ProtectedRoutes = require('./controllers/protectedController');

var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://rrr:rrr@cluster0-njyai.mongodb.net/test?retryWrites=true';
mongoose.connect(mongoDB)
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var indexRouter = require('./routes/index');
var auth = require('./routes/auth');
var app = express();
var user = require('./routes/user');
const dashboard=require('./routes/dashboard');


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/', ProtectedRoutes.ProtectedRoutes);
app.use('/', indexRouter);
app.use('/auth', auth);
app.use('/user', user);
app.use('/dashboard', dashboard);


app.use(function (req, res, next) {
    next(createError(404));
});


app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
