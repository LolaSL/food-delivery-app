import userModel from '../models/userModel.js';
import orderModel from '../models/orderModel.js';
import Stripe from "stripe";
import dotenv from 'dotenv'

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";

  try {
    const { userId, items, amount, address } = req.body;

    // Validate request body
    if (!userId || !items || !amount || !address) {
      console.error('Missing required fields');
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    // Create new order
    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    const line_items = items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: 'usd',
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2 * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true })
      res.json({ success: true, message: "Paid Order" });
    } else {
      await orderModel.findByIdAndDelete(orderId)
      res.json({ success: false, message: "Order is not paid" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
}
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Error" });
  }
}

const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Error" });
  }
}
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Error" });
  }
}


export { placeOrder, verifyOrder, userOrders, listOrders };

