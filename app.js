var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var config = require('./app/configs/env.js');
var view = require('./app/configs/view.js');
var routes = require('./app/configs/router.js');


var error = require('./app/middles/error.js');

var app = express();

// view engine setup
view(app);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(favicon(path.join(__dirname, 'app/' + qNode.env + '/static/resources', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app/' + qNode.env )));

routes(app);

// error
error(app);

module.exports = app;
