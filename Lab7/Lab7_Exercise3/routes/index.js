var express = require('express');
var router = express.Router();
var crud = require('../service/crud');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/lectures', function (req, res, next) {
    crud.Find().then((docs) => {
        const data = JSON.stringify(docs);
        res.send(JSON.parse(data));
    }).catch(err => console.log("error at index" + (err)));
});

router.get('/lectures/:course', function (req, res, next) {
    crud.FindOne(req.params.course).then((doc) => {
        const data = JSON.stringify(doc);
        res.send(JSON.parse(data));
    }).catch(err => console.log("error at index" + JSON.stringify(err)));
});

router.post('/lectures', function (req, res, next) {
    crud.Add(req.body.course, req.body.lecture)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(400).send(err));
});

router.put('/lectures/:course', function (req, res, next) {
    console.log("course" + req.params.course);
    crud.Update(req.params.course, req.body.lecture)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(400).send(err));
});

router.delete('/lectures/:course', function (req, res, next) {
    console.log("course" + req.params.course);
    crud.Delete(req.params.course)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(400).send(err));
});

router.get('/lectures/search/:q', function (req, res, next) {
    crud.Search(req.params.q)
        .then(data => res.status(200).send(JSON.parse(data)))
        .catch(err => res.status(400).send(err));
});
module.exports = router;

