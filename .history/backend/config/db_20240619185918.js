import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://lolashepota:eGkAj8V5hlGu3xew@cluster0.n4nnmnn.mongodb.net/food-delivery-app")
        .then(() => console.log("MongoDB is connected"));
}