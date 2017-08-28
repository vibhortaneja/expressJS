var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    genre: String,
    description: String,
    author: String,
    publisher: String
});

var data = mongoose.model('books', BookSchema)
module.exports = data;