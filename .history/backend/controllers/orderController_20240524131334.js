import userModel from '../models/userModel.js'
import orderModel from '../models/orderModel.js'
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const placeOrder = async (req, res) => {
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
        })
    } catch (error) {
        
    }
}

export {placeOrder}

