import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    items: [
        {
            item:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'Item',
                required:true
            },
            quantity: {
                type:Number,
                min:1,
                default:1,
            },
        }
    ]
})

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;