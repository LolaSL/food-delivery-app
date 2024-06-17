import express from 'express';
const Menu = require('../models/Menu');
const router = express.Router();

// Get all menu items
router.get('/', async (req, res) => {
    try {
        const menuItems = await Menu.find();
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add new menu item
router.post('/', async (req, res) => {
    const { menu_name, menu_image } = req.body;

    const menuItem = new Menu({
        menu_name,
        menu_image,
    });

    try {
        const newMenuItem = await menuItem.save();
        res.status(201).json(newMenuItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
