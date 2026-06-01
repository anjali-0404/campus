import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MongoMemoryServer } from 'mongodb-memory-server';

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/campus-portal');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`Warning: Primary MongoDB connection failed. Falling back to In-Memory MongoDB.`);
    try {
      const mongoServer = await MongoMemoryServer.create();
      const mongoUri = mongoServer.getUri();
      await mongoose.connect(mongoUri);
      console.log(`In-Memory MongoDB Connected at ${mongoUri}`);
      return true;
    } catch (fallbackError) {
      console.error('In-Memory fallback failed as well.');
      return false;
    }
  }
};

export default connectDB;
