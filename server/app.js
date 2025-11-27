import express from 'express';
import dbConnect from './config/database.js';
import authRoutes from './routes/auth.route.js';
const app = express();
//NOTE fn used for mongodb connection
dbConnect();
app.use(express.json())

app.get('/', (req, res) => {
  res.send('THIS IS MY HOMEPAGE');
});

app.use('/api/v1/auth', authRoutes);

app.listen(3000, () => {
  console.log(`Server is running on 3000`);
});