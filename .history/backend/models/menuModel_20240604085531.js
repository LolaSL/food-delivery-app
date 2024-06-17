const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    menu_name: {
        type: String,
        required: true,
    },
    menu_image: {
        type: String,
        required: true,
    },
});

const Menu = mongoose.models. || mongoose.model('Menu', menuSchema);
module.exports = Menu;
