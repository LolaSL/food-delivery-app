import express from 'express';
import {getMenu} from "../controllers/menuCotroller.js"
const router = express.Router();

// Get all menu items
router.get('/', async (req, res) => {
 
});

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

module.exports = router;
