import userModel from '../models/userModel.js'

const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id: req.body.userId });
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1
        } else {
            cartData[req.body.itemId] += 1
        }
        await userModel.findByIdAndUpdate
    } catch (error) {

    }
}

const removeFromCart = async (req, res) => {

}

const getCart = async (req, res) => {

}

export { addToCart, removeFromCart, getCart }