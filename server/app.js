const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
bodyParser = require('body-parser');
jwt = require('jsonwebtoken');
const ProtectedRoutes = require('./controllers/protectedController');

const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://rrr:rrr@cluster0-njyai.mongodb.net/test?retryWrites=true';
mongoose.connect(mongoDB)
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const indexRouter = require('./routes/index');
const auth = require('./routes/auth');
const app = express();
const user = require('./routes/user');
const dashboard = require('./routes/dashboard');
const column = require('./routes/column');
const card = require('./routes/card');
const team = require('./routes/team');

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
app.use('/column', column);
app.use('/card', card);
app.use('/team', team);

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
