import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      subtotal: {
        type: Number,
        required: true,
      },
      title: String,
      price:Number,
    },
  ],
  totalPrice:{
    type: Number,
  },
  status: {
    type: String,
    enum: ['ordered', 'paid', 'cancelled', 'completed'],
    default: 'ordered'
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  completedAt: Date,
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
