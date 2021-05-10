var express = require('express');
var router = express.Router();
var titorialController=require('../controller/tutorial')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/tutorial',titorialController.createTitorial);
router.get('/tutorial',titorialController.getTitorial);
router.get('/tutorial/:Title',titorialController.getTitorials);
router.delete('/tutorial',titorialController.deleteTutorial);
router.put('/tutorial/:id',titorialController.updateTutorial);

module.exports = router;
