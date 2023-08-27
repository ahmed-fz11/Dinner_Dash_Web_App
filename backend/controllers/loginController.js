import { compareSync } from "bcrypt";
import jwt from 'jsonwebtoken';
import User from "../models/User.js";

export const loginUser = (req,res)=>{
    User.findOne({email:req.body.email}).then(user=>{
        //No user found
        if(!user){
            return res.status(401).send({
                success:false,
                message:'Could not find the user with specified email'
            })
        }
        //Incorrect Password
        if(!compareSync(req.body.password,user.password)){
            return res.status(401).send({
                success:false,
                message:'Incorrect password'
            })
        }

        const payload = {
            fullname:user.fullname,
            id: user._id,
            email:user.email,
        }

        const token = jwt.sign(payload,"Random string",{expiresIn : '1d'})
        return res.status(200).send({
            success:true,
            message:'Logged in successfully',
            token: 'Bearer ' + token 
        })
    })
}