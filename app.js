var express = require('express');
var bodyParser = require('body-parser'); /*To perform different HTTP request*/
var mongoose = require('mongoose'); /*MingoDb data base*/

var api = require('./routes/api')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", api);


app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.listen(3000);

module.exports = app;