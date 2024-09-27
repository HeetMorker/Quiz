import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const ScoreSummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const { id, answers } = location.state;
  const [score, setScore] = useState(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const submitQuiz = async () => {
      try {
        const response = await axios.post(`http://localhost:5000/api/quizzes/${id}/submit`, { answers });
        const totalQuestions = answers.length;
        const userScore = response.data.score;
        setScore(userScore);
        setPercentage((userScore / totalQuestions) * 100);
      } catch (error) {
        console.error('Error submitting quiz:', error);
      }
    };

    submitQuiz();
  }, [id, answers]);

  return (
    <div className="container mx-auto mt-10 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Quiz Completed!</h1>
      {score !== null ? (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-2xl font-semibold text-gray-700 mb-4">Your Score: {score}</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full" style={{ width: `${percentage}%`, transition: 'width 1s' }}></div>
          </div>
          <p className="mt-4 text-lg">Score Percentage: {percentage.toFixed(2)}%</p>
          
          {/* Navigate to home when the button is clicked */}
          <button
            onClick={() => navigate('/')}  // Navigates to the home page
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mt-6"
          >
            Back to Quizzes
          </button>
        </div>
      ) : (
        <p className="text-2xl font-bold">Loading your score...</p>
      )}
    </div>
  );
};

export default ScoreSummaryPage;
