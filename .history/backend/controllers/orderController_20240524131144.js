import userModel from '../models/userModel.js'
import orderModel from '../models/orderModel.js'
import Stripe from "stripe"

const stripe = new Stripe(process.env.)

const placeOrder = async (req, res) => {
    
}

export {placeOrder}

