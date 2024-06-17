import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import validator from "validator"

const loginUser = async (req, res) => {

}

const createToken = (id) => {
    return jwt.sign({  id }, process.env.JWT_SECRET_KEY)}

const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const exist = await userModel.findOne({ email })
        if (exist) {
            return res.json({ success: false, message: "User alredy exists!" })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please, enter a valid email address." })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please, enter a strong password." })
        }

        const salt = await bcrypt.genSalt(11);
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new userModel.User({
            name: name,
            email: email,
            password: hashedPassword

        })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({ success: true, token})

    }

    catch (error) {
        console.log(error)
        res.json()
    }
}

export { loginUser, registerUser } 