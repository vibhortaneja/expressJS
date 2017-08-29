let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser')

let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bookstore');
let db = mongoose.connection;

let Data = require('../models/data');


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}))

router.get('/', (req, res) => {
    Data.find({})
        .exec((err, books) => {
            res.json(books);
        });
});

router.post('/', (req, res) => {
    Data.create(req.body).then((data) => {
        res.send(data);
    });

});

router.put('/update/:id', (req, res) => {
    Data.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
        Data.findOne({ _id: req.params.id }).then((data) => {
            res.send(data);
        }); // here then keyword is part of promise function 
    });
});


router.delete('/delete/:id', (req, res) => {
    Data.findByIdAndRemove({ _id: req.params.id }).then((data) => {
        res.send(data);
    });

});

module.exports = router;