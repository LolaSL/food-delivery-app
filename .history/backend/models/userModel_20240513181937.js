import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
  
})

const userModel = mongoose.models.food || mongoose.model('food', foodSchema)

export default foodModel;