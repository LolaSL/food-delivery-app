import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://mernBlog:lola@cluster0.n4nnmnn.mongodb.net/food-delivery-app")
        .then(() => console.log("MongoDB is connected"));
}