import express from 'express';
import { loginUser, registerUser } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post("/register", registerUser )

foodRouter.get("/list", listfood)

foodRouter.post("/remove", removeFood)