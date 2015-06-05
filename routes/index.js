var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

/* GET quizes */
router.get('/quizes',quizController.index);
router.get('/quizes/:quizID(\\d+)',quizController.show);
router.get('/quizes/:quizID(\\d+)/answer',quizController.answer);

/* GET author */
router.get('/author', function(req, res) {
  res.render('author');
});



module.exports = router;