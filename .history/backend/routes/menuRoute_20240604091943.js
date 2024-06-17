import express from 'express';
import {getMenu} from "../controllers/menuController.js"
const menuRouter = express.Router();

// Get all menu items
menuRouter.get('/',  getMenu);

// // Add new menu item
router.post('/', );

export default menuRouter;
