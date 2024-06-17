import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true

    },
    items: {
        type: Array,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema)

export default orderModel;