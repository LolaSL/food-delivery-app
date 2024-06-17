import express from 'express';
import {getMenu, addMenuItem} from "../controllers/menuController.js"
const menuRouter = express.Router();

menuRouter.get('/',  getMenu);


menuRouter.post('/addMenu', addMenuItem);

export default menuRouter;
