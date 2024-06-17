import menuModel from '../models/menuModel.js';
// import validator from "validator";

const getMenu = async (req, res) => {
    try {
        const menuItems = await menuModel.find();
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addMenuItem = async (req, res) => {
    const { menu_name, menu_image } = req.body;

    const menuItem = new menuModel({
        menu_name,
        menu_image,
    });
    // if (!validator.isName(name)) {
    //     return res.json({ success: false, message: "Please, enter a valid menu name." })
    // }
    try {
        const newMenuItem = await menuItem.save();
        res.status(201).json(newMenuItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
export { getMenu, addMenuItem }