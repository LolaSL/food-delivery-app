import express from 'express';
import{addToCart, removeFromCart,getCart} from "../controllers/cartController"

const cartRouter = express.Router();


cartRouter.post("/register", registerUser )

cartRouter.post("/login", loginUser)
cartRouter.get("/all", getCart)