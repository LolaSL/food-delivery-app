import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env)
        .then(() => console.log("MongoDB is connected"));
}