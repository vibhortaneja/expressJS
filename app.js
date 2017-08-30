let express = require('express');
let bodyParser = require('body-parser'); /*To perform different HTTP request*/
let mongoose = require('mongoose'); /*MingoDb data base*/

let api = require('./routes/api')
let operation = require('./routes/operations')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", api);
app.use("/opp",operation);

app.listen(3000);

module.exports = app;