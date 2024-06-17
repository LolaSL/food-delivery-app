import express from 'express';
import{addToCart, removeFromCart,getCart} from "../c"

const cartRouter = express.Router();