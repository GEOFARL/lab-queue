import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB connected: ${conn.connection.host}`.underline.cyan);
  } catch (err) {
    console.error(`${err.message}`.underline.red);
  }
};

export default connectDB;
