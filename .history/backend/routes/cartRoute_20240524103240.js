import express from 'express';
import {addToCart, removeFromCart, getCart} from "../controllers/cartController.js"
import authMiddleware from '../middleware/auth.js';


const cartRouter= express.Router();


cartRouter.post("/add", addToCart)

cartRouter.post("/remove", authremoveFromCart)
cartRouter.get("/get", getCart)

export default cartRouter;