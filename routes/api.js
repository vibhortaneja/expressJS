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
    Data.find((err, books) => {
        res.json(books);
    });
});

router.post('/', (req, res) => {
    var databook = new Data();
    databook.title = req.body.title
    databook.author = req.body.author
    databook.genre = req.body.genre

    databook.save((err, book) => {
        if (err) {
            res.send('fail to add');
        } else {
            res.json(book)
        }
    })
})

router.put('/update/:id', (req, res) => {
    Data.update({
        _id: req.params.id

    }, { $set: { title: req.body.title } },  (err, newBook) => {
        if (err)
            res.send("error in updating")
        else {
            res.send(newBook)
        }
    })
})

router.delete('/delete/:id', (req, res) => {
    Data.remove({
        _id: req.params.id
    }, (err, book) => {
        if (err) res.send('error deleting')
        else {
            res.json(book)
        }
    })
})




module.exports = router;