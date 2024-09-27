const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const quizRoutes = require('./routes/quizRoutes');


dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


app.use('/api', quizRoutes);

app.get('/', (req, res) => {
  res.send('Quiz API is running');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
