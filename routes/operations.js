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

router.post('/subtract/:id5/:id6', (req, res) => {
    let a =parseFloat(req.params.id5)
    let b = parseFloat(req.params.id6)
    let sub = a-b;
    res.send(sub.toString());
    
})

router.post('/divide/:id7/:id8', (req, res) => {
    let a =parseFloat(req.params.id7)
    let b = parseFloat(req.params.id8)
    let div = a/b;
    res.send(div.toString());
    
})



module.exports=router;