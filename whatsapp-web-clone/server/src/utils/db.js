import mongoose from 'mongoose';

let isConnected = false;

export async function connectToDatabase(mongoUri) {
  if (isConnected) return mongoose.connection;

  if (!mongoUri) {
    throw new Error('MONGODB_URI is not set');
  }

  mongoose.set('strictQuery', true);

  await mongoose.connect(mongoUri, {
    autoIndex: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 10000,
  });

  isConnected = true;
  return mongoose.connection;
}