import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/quizzes/${id}`);
        setQuiz(response.data);
        setAnswers(new Array(response.data.questions.length).fill(''));
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };

    fetchQuiz();
  }, [id]);

  const handleAnswerChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (!answers[currentQuestionIndex]) {
      alert('Please select an answer before proceeding!');
      return;
    }
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/score', { state: { id, answers } });
    }
  };

  if (!quiz) return <div className="text-center text-2xl font-bold">Loading...</div>;

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6">{quiz.title}</h2>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">{quiz.questions[currentQuestionIndex].questionText}</h3>
        <div className="space-y-4">
          {quiz.questions[currentQuestionIndex].choices.map((choice, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                id={`choice-${index}`}
                name="answer"
                value={choice}
                checked={answers[currentQuestionIndex] === choice}
                onChange={handleAnswerChange}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <label htmlFor={`choice-${index}`} className="ml-3 text-lg text-gray-700">{choice}</label>
            </div>
          ))}
        </div>
        <button
          onClick={handleNextQuestion}
          className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'Submit Quiz'}
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
