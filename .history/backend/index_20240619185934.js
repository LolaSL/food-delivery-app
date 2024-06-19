import express from 'express';
import cors from 'cors';
import path from "path";
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import menuRouter from './routes/menuRoute.js';

import dotenv from 'dotenv';

dotenv.config();


const app = express();
const port = 4000;


app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error('The MONGODB_URI environment variable is not defined');
    }
const connectDB = async () => {
   

   await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('MongoDB connected successfully'))
        .catch((err) => console.error('MongoDB connection error:', err));
};
connectDB();

app.use("/api/food", foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use('/api/menu', menuRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'frontend/dist/index.html'))
);


app.get('/', (req, res) => {
    res.send("API is working!");
})

app.listen(port, () => { console.log(`Server started on http://localhost:${port}`) });
