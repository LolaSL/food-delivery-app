import express from 'express';
import {getMenu} from "../controllers/menuCotroller.js"


// Get all menu items
const cartRouter = express.Router();

// // Add new menu item
// router.post('/', async (req, res) => {
//     const { menu_name, menu_image } = req.body;

//     const menuItem = new Menu({
//         menu_name,
//         menu_image,
//     });

//     try {
//         const newMenuItem = await menuItem.save();
//         res.status(201).json(newMenuItem);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

export default cartRouter;
