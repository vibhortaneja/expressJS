var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

var Data = require('../models/data');


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}))

router.get('/', function(req, res) {
    Data.find({})
        .exec(function(err, books) {
            res.json(books);
        });
});

router.post('/', function(req, res) {
    Data.create(req.body).then(function(data) {
        res.send(data);
    });

});

router.put('/update/:id', function(req, res, next) {
    Data.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
        Data.findOne({ _id: req.params.id }).then(function(data) {
            res.send(data);
        });
    });
});


router.delete('/delete/:id', function(req, res, next) {
    Data.findByIdAndRemove({ _id: req.params.id }).then(function(data) {
        res.send(data);
    });

});

module.exports = router;