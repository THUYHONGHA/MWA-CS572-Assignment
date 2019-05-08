var express = require('express');
var router = express.Router();
var crud = require('../service/crud');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lectures', function(req, res, next) {
  crud.Find().then((docs)=> {
    const data = JSON.stringify(docs);
    res.send(JSON.parse(data));
  }).catch(err=> console.log("error at index"+(err)));
});

router.get('/lectures/:course', function(req, res, next) {
  crud.FindOne(req.params.course).then((doc)=> {
    const data = JSON.stringify(doc);
    res.send(JSON.parse(data));
  }).catch(err=> console.log("error at index"+JSON.stringify(err)));
});

router.post('/lectures', function(req, res, next) {
  console.log("start index");
  crud.FindOne(req.params.course).then((doc)=> {
    const data = JSON.stringify(doc);
    res.send(JSON.parse(data));
  }).catch(err=> console.log("error at index"+JSON.stringify(err)));
});
module.exports = router;

