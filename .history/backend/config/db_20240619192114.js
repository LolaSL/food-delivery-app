import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://mernBlog:lola1968@cluster0.qg80atw.mongodb.net/")
    mongodb+srv://<username>:<password>@cluster0.qg80atw.mongodb.net/
        .then(() => console.log("MongoDB is connected"));
}