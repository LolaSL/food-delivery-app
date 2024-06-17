import userModel from '../models/userModel.js'

// const addToCart = async (req, res) => {
//     try {
//         let userData = await userModel.findOne({ _id: req.body.userId });
//         let cartData = await userData.cartData;
//         if (!cartData[req.body.itemId]) {
//             cartData[req.body.itemId] = 1
//         } else {
//             cartData[req.body.itemId] += 1
//         }
//         await userModel.findByIdAndUpdate(req.body.userId, { cartData })
//         res.json({ succsess: true, message: "Food added to cart." });
//     } catch (error) {
//         console.log(error);
//         res.json({ succsess: false, message: "Error to add food to cart." });
//     }
// }

const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id: req.body.userId });
        if (!userData) {
            // Handle the case where userData is null (user not found)
            return res.json({ success: false, message: "User not found." });
        }

        let cartData = userData.cartData || {}; // Initialize cartData if it's null
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

}

const getCart = async (req, res) => {

}

export { addToCart, removeFromCart, getCart }