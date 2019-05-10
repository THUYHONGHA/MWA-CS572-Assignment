var express = require('express');
var router = express.Router();
const crud = require('../service/crud');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/locations', (req, res, next) => {
    crud.insertLocation(req.body.name, req.body.category, req.body.coord)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(400).send(err));
});

router.post('/locations/search', (req, res, next) => {
    crud.searchNearLocation(req.body.name, req.body.category, req.body.coord)
        .then(data =>{
            res.status(200).send(data);})
        .catch(err => {
            res.status(400).send(err);
        });

})
module.exports = router;
