import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizListPage from './pages/QuizListPage';
import QuizPage from './pages/QuizPage';
import ScoreSummaryPage from './pages/ScoreSummaryPage';
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<QuizListPage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/score" element={<ScoreSummaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
