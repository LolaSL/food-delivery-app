import userModel from '../models/userModel.js'

const addToCart = async (req, res) => {
try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (condition) {
        
    }
} catch (error) {
    
}
}

const removeFromCart = async(req, res)=>{
    
}

const getCart = async(req, res)=>{
    
}

export {addToCart, removeFromCart,getCart }