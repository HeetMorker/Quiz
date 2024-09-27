import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const QuizListPage = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/quizzes');
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Available Quizzes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <div key={quiz._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{quiz.title}</h2>
            <p className="text-gray-600 mb-6">{quiz.description}</p>
            <Link to={`/quiz/${quiz._id}`} className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Take Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizListPage;
