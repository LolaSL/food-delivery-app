import express from 'express';
import { loginUser, registerUser } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post("/add", upload.single("image"), addFood)

foodRouter.get("/list", listfood)

foodRouter.post("/remove", removeFood)