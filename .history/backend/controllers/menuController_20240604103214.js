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
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        consoleconsole.log(error)
        res.json({ success: false, message: "Error" })
    }

}
export { getMenu, addMenuItem }