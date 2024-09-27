# Quiz Application

This is a full-stack MERN (MongoDB, Express, React, Node.js) Quiz Application where users can select a quiz, answer multiple-choice questions, and view their score upon completion. The app includes both the frontend (React.js) and backend (Node.js + Express) with a MongoDB database for storing quizzes and user responses.

## Features

- **User-friendly Interface**: Browse quizzes, take exams, and view scores with a clean and interactive UI.
- **Multiple Quiz Categories**: Includes quizzes on JavaScript, HTML, CSS, React.js, and Node.js.
- **Dynamic Quiz Loading**: Quizzes and questions are dynamically loaded from the backend API.
- **Score Calculation**: Score is calculated on the backend and displayed to the user.
- **Mobile Responsive**: Optimized for both desktop and mobile devices using Tailwind CSS.
- **Interactive Elements**: Confetti animation for high scores, smooth transitions, and progress bars.
- **API Integration**: Backend API to add, fetch, and submit quiz responses.
- **Deployed on Vercel**: Both the frontend and backend are deployed on Vercel for ease of access.

## Tech Stack

### **Frontend**:
- **React.js**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **Axios**: For making HTTP requests to the backend API.
- **React Router**: For routing between pages.
  
### **Backend**:
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing quiz and user data.
- **Mongoose**: ODM for MongoDB to interact with the database.
  
### **Deployment**:
- **Frontend**: Deployed on Vercel.
- **Backend**: Deployed on Vercel as a serverless API.

## Project Structure

```bash
├── backend/                     # Backend API
│   ├── config/                  # Database configuration
│   ├── controllers/             # Express controllers (Quiz logic)
│   ├── models/                  # MongoDB models (Quiz Schema)
│   ├── routes/                  # API routes
│   ├── server.js                # Express app configuration
│   └── .env                     # Environment variables (MongoDB URI, etc.)
├── frontend/                    # React frontend
│   ├── src/
│   │   ├── components/          # Reusable components (Navbar, etc.)
│   │   ├── pages/               # Pages (QuizListPage, QuizPage, ScoreSummaryPage)
│   ├── public/                  # Static files (index.html, favicon, etc.)
│   ├── package.json             # Frontend dependencies and scripts
├── .gitignore                   # Ignored files for Git version control
├── vercel.json                  # Vercel deployment configuration
└── README.md                    # Project documentation


Environment Variables:

MONGO_URI=your_mongo_db_connection_string


** Installation & Setup 

- **Prerequisites**:
* Node.js (v14+)
* MongoDB (local or cloud like MongoDB Atlas)

- **Backend Setup**:

1. Clone Repo : 

git clone https://github.com/yourusername/quiz-app.git
cd quiz-app/backend

2.  Install dependencies:
=> npm install

3. Set up environment variables: Create a .env file in the backend folder and add your MongoDB URI:
=> MONGO_URI=your_mongodb_connection_string

4. Run the backend server:
=> npm start

** The backend server should now be running on http://localhost:5000.

- **Frontend Setup**:

1. Navigate to the frontend folder:
=> cd quiz-app/frontend

2. Install dependencies:
=> npm install

3. Run the frontend app:
=> npm start

** The React app should now be running on http://localhost:3000.

- **API ENDPOINTS**:

The backend API provides several endpoints to manage quizzes and user submissions:

* GET /api/quizzes: Fetch all quizzes.
* GET /api/quizzes/
: Fetch a specific quiz by ID.
* POST /api/quizzes: Add a new quiz (for admin use).
* POST /api/quizzes/
 /submit: Submit answers for a quiz and calculate the score.


Deployment on Vercel
Both the frontend and backend can be deployed on Vercel.

Backend Deployment:
Ensure you have a Vercel account and the Vercel CLI installed.

Inside the backend directory, run:

bash
Copy code
vercel
Follow the prompts to deploy the backend API.

Frontend Deployment:
Navigate to the frontend directory.

Run the following command to deploy:

bash
Copy code
vercel
Follow the prompts to deploy the frontend.

Testing
Once deployed, you can test the application by visiting the frontend URL and interacting with the quizzes.

Future Improvements
User Authentication: Add user login and signup functionality to allow users to track their quiz progress.
Admin Dashboard: Create an admin panel for adding/editing/deleting quizzes.
Timed Quizzes: Implement timed quizzes for more challenging exams.
Leaderboard: Display a leaderboard showing top scorers across different quizzes.

 - License
=> This project is licensed under the MIT License - see the LICENSE file for details.