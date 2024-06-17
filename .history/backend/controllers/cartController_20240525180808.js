import userModel from '../models/userModel.js'

const addToCart = async (req, res) => {
    try {
  
        let userData = await userModel.findById({ req.body.userId });
        let cartData = await userData.cartData; // Initialize cartData if it's null
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Food added to cart." });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding food to cart." });
    }
};


const removeFromCart = async (req, res) => {
    try {
 
        let userData = await userModel.findById(req.body.userId);


        if (!userData) {
            // Handle the case where userData is null (user not found)
            return res.json({ success: false, message: "User not found." });
        }

        let cartData = userData.cartData;
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Food removed from cart." });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error removing food to cart." });
    }
}

const getCart = async (req, res) => {
    try {

        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error getting cart" });
    }
}

export { addToCart, removeFromCart, getCart }