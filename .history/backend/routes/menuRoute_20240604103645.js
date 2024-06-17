import express from 'express';
import {getMenu, addMenuItem} from "../controllers/menuController.js"
import multer from 'multer';


const menuRouter = express.Router();

menuRouter.get('/',  getMenu);


menuRouter.post('/addMenu', addMenuItem);

export default menuRouter;
