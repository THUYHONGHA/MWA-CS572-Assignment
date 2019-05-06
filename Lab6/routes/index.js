var express = require('express');
var router = express.Router();
var gradeService = require('../service/gradeService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/grade/:id', function (req, res, next) {
  const result = gradeService.getGrade(req.params.id);
  if (result)
    res.status(200).json({id: result.id, name: result.name, course: result.course, grade: result.grade});
  else
    res.send('No result');
});

router.post('/grade', function (req, res, next) {
  let result = gradeService.createGrade(req.body.id, req.body.name, req.body.course, req.body.grade);
  res.status(result.status).json(result);
});

router.put('/grade/:id', function (req, res, next) {
  let result = gradeService.updateGrade(req.params.id, req.body.grade);
  res.status(result.status).json(result);
});

router.delete('/grade/:id', function (req, res, next) {
  let id = req.params.id;
  if(id){
    let result = gradeService.deleteGrade(req.params.id);
    res.status(result.status).json(result);
  }else
    res.json({'status': 400, 'message': 'ID is empty'});

});

module.exports = router;
