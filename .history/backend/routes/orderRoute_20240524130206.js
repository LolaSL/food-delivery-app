import express from 'express';
import { placeOrder } from "../controllers/orderController.js"
import authMiddleware from '../middleware/auth.js';


const cartRouter = express.Router();


cartRouter.post("/add", authMiddleware, addToCart)

export default cartRouter;