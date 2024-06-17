import menuModel from '../models/menuModel';

const getMenu =async (req, res) => {
    try {
        const menuItems = await Menu.find();
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}