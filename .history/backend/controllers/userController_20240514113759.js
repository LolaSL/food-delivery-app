import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import validator from "validator"

const loginUser = async (req, res) => {

}

const createToken = (id) => {
    return jwt.sign({ id: id }, {}
}
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
        const user = new userModel.User({
            name: name,
            email: email,
            password: hashedPassword

        })
        await newUser.save(user)

    }

    catch (error) {
        console.log(error)
    }
}

export { loginUser, registerUser } 