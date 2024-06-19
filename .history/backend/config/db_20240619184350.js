// import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect(process.env.MONGODB_URL)
//         .then(() => console.log("MongoDB is connected"));
// }

import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const connectDB = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new Error('The MONGODB_URI environment variable is not defined');
    }

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));
};

