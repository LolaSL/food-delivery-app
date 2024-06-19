import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(pro)
        .then(() => console.log("MongoDB is connected"));
}