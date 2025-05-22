import express from 'express';
import mongoose from 'mongoose';
import reservationRoutes from './routes/reservations.js';

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Bağlantısı
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/reservations', reservationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
