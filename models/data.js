let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BookSchema = new Schema({
    title: String,
    genre: String,
    description: String,
    author: String,
    publisher: String
}, {
    versionKey: false
});

let data = mongoose.model('books', BookSchema)
module.exports = data;
