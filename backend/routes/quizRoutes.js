const express = require('express');
const { getQuizzes, getQuizById, submitQuiz, addQuiz } = require('../controllers/quizController');

const router = express.Router();

router.get('/quizzes', getQuizzes);
router.get('/quizzes/:id', getQuizById);
router.post('/quizzes/:id/submit', submitQuiz);
router.post('/quizzes', addQuiz);

module.exports = router;
