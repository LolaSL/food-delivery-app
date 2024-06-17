import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import validator from "validator"

const loginUser = async(req, res)=>{

}
const registerUser = async(req, res)=>{
    const {name, password, email} = req.body;
    try {
        const exist = awayi userModel.find
    }
    catch(error){
        console.log(error)
    }
}

export {loginUser, registerUser} 