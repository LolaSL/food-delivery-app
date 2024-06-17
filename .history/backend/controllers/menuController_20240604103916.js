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

    let image_filename = `${req.file.filename}`;
    const menu = new menuModel({
        name: req.body.name,
        image: image_filename
    })
    try {
        await menu.save();
        res.json({ success: true, message: "Menu Added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }

}
export { getMenu, addMenuItem }