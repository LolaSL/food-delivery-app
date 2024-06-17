import menuModel from '../models/menuModel.js';
import fs from 'fs';

const getMenu = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const menu = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        const menuItems = await menuModel.find();
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addMenuItem = async (req, res) => {
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
}
export { getMenu, addMenuItem }