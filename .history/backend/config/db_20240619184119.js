// import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect(process.env.MONGODB_URL)
//         .then(() => console.log("MongoDB is connected"));
// }

import mongoose from "mongoose";


export const connectDB = async () => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('MongoDB connected successfully'))
        .catch((err) => console.error('MongoDB connection error:', err))
}
