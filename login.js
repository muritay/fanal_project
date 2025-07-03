import user from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config()
const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await user.findone ({email})
        if (!user)
        return res.status(404).json({message: "user not found, signup instead"})
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
        return res.status(404).json({message:"invalid password"})
}
    const token = jwt.sign({id: user._id, email: user.email}, process.env.jwt_SECRET, {expiresin: "1h"})

    req.session.user = {
        id: user._id,
        token
    }
    
res.status(200).json({message: "login successfully", details:{
    id:User_id,
    username:user?.username,
    email:user.email,
    createdAt:user.createdAt,
    profilePicture:user.profilePicture && '',  
    followers:user.followers.length,
    following:user.following.length
}})
try{
}catch (error){
if (error) {
    res.status(500).json({message: "internal server error"})
    console.error (error.message)
}
}
}

export default login
