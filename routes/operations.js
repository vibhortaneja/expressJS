let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

/*router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}))*/

router.post('/multiply/:id1/:id2', (req, res) => {

    let a =parseFloat(req.params.id1)
    let b = parseFloat(req.params.id2)
    let mul = a*b;
    res.send(mul.toString());
    
})

router.post('/add/:id3/:id4', (req, res) => {
    let a =parseFloat(req.params.id3)
    let b = parseFloat(req.params.id4)
    let add = a+b;
    res.send(add.toString());
    
})


module.exports=router;