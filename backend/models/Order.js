import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    status:{
        type:String,
        enum: ['ordered','paid','collected','completed']
    },
    price:{
        type:Number,
        min:0,
    },
    date:Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [
        {
            item:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'Item',
                required:true
            },
            quantity: Number,
        }
    ]
})

const Order = mongoose.model('Order',orderSchema)

export default Order;