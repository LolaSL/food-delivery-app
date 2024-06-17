import menuModel from '../models/menuModel.js';


const getMenu = async (req, res) => {
    try {
        const menuItems = await menuModel.find({});
        res.json({ success: true, data:menuItems })
    } catch (err) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
};

const addMenuItem = async (req, res) => {

    let image_filename = `${req.file.filename}`;
    const menu = new menuModel({
        menu_name: req.body.name,
        menu_image: image_filename
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