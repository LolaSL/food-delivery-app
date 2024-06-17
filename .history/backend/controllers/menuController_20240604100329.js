import menuModel from '../models/menuModel.js';


const getMenu = async (req, res) => {
    
    try {
        const menuItems = await menuModel.find();
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addMenuItem = async (req, res) => {

    // const { menu_name, menu_image } = req.body;

let image_filename = `${req.file.filename}`;
    const menu = new menuModel({
        name: req.body.name,
        image: image_filename
    })

    try {
        const newMenuItem = await menu.save();
        res.status(201).json(newMenuItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
export { getMenu, addMenuItem }