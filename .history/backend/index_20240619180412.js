import express from 'express';
import cors from 'cors';
import path from "path";
import { connectDB } from './config/db.js';
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



connectDB();

app.use("/api/food", foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use('/api/menu', menuRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get('*', (req, res) => )


app.get('/', (req, res) => {
    res.send("API is working!");
})
    
app.listen(port, () => { console.log(`Server started on http://localhost:${port}`) });
