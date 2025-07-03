import User from "../models/users.js";
import bcrypt from "bcryptjs";
const signup = async (req, res) => {
    const {username,email,password} = (req.req)
    try {
        const existUser = await User.findOne ({email});
        if (existUser) {
            return res.Status(400).json({message: "user already exist, login instead"})
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save()
        res.satus(201).json({message: "internal server error"})

    } catch (error) {
        if (error) {
            res.status(500).json({message:"internal server error"})
            console.error(error.message)
        }

    }
};

export default signup;