let express = require('express');
let bodyParser = require('body-parser'); /*To perform different HTTP request*/
let mongoose = require('mongoose'); /*MingoDb data base*/

let api = require('./routes/api')
let new1 = require('./routes/new')
let new2 = require('./routes/new')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", api);
app.use("/opp",new1);

app.listen(3000);

module.exports = app;