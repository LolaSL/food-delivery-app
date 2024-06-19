import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(proce)
        .then(() => console.log("MongoDB is connected"));
}