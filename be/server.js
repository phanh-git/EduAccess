const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());

// --- Định nghĩa các Routes ---
// Users Routes
app.use('/api/users', require('./routes/userRoutes'));
// Courses Routes 
app.use('/api/courses', require('./routes/courseRoutes'));

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
