import userModel  from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import validator from "validator"

const loginUser = async(req, res)=>{

}
const registerUser = async(req, res)=>{
    const {name, password, email} = req.body;
    try {
        const exist = await userModel.findOne({email})
    if(exist){
return res.json({success: false, message:"User alredy exists!"})
        }
        
    if(!validator.isEmail(email)){
        return res.json({success: false, message:"Please, enter a valid email address."})
            }
    
    
    
    }

    catch(error){
        console.log(error)
    }
}

export {loginUser, registerUser} 