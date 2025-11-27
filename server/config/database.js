import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb+srv://playnood123_db_user:dAXgB9KSSYEoImCT@cluster0.nkxknat.mongodb.net/?appName=Cluster0'
    );
    console.log('db connected');
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;