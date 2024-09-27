const Quiz = require('../models/Quiz');

// Fetch all quizzes
const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch a quiz by ID
const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Submit quiz answers and calculate score
const submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body; // Assume answers is an array of selected answers
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        score++;
      }
    });

    res.status(200).json({ score });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addQuiz = async (req, res) => {
    try {
      const { title, description, questions } = req.body;
  
      // Create a new quiz
      const newQuiz = new Quiz({
        title,
        description,
        questions
      });
  
      // Save the quiz to the database
      const savedQuiz = await newQuiz.save();
      res.status(201).json(savedQuiz);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

module.exports = {
  getQuizzes,
  getQuizById,
  submitQuiz,
  addQuiz
};
