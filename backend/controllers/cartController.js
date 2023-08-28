import Cart from "../models/Cart.js";
import User from "../models/User.js";
import Item from "../models/Item";
import mongoose from "mongoose";

export const getAllCart = async(req,res)=>{
    try{
        
    }
    catch(error)
    {
        console.error("Error fetching cart from database: ",error)
        res.status(500).json({error:"Internal server error"})
    }
}