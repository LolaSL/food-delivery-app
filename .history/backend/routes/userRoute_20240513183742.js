import express from 'express';
import { loginUser, registerUser } from '../../';

const userRouter = express.Router();

userRouter.post("/register", registerUser )

foodRouter.get("/list", listfood)

foodRouter.post("/remove", removeFood)