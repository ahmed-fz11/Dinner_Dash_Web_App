import { hashSync } from "bcrypt";
import User from "../models/User.js";

export const registerUser = (req,res)=>{
    const user = new User({
        fullname:req.body.fullname,
        password: hashSync(req.body.password,10),
        email:req.body.email,
    })

    user.save().then(user=>{
        res.send({
            success:true,
            message:"User created successfully",
            user:{
                id:user._id,
                fullname:user.fullname,
                email:user.email
            }
        })
    }).catch(err=>{
        res.send({
            success:false,
            message:"Something went wrong",
            user:{
                id:user._id,
                fullname:user.fullname,
                email:user.email,
                error:err,
            }
        })
    })
}