import express from 'express';
import {getMenu, addMenuItem} from "../controllers/menuController.js"
const menuRouter = express.Router();

// Get all menu items
menuRouter.get('/',  getMenu);

// // Add new menu item
menuRouter.post('/', addMenuItem);

export default menuRouter;
