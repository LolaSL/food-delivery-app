import menuModel from '../models/menuModel.js';

const getMenu = async (req, res) => {
    try {
        const menuItems = await menuModel.find();
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
export { getMenu }