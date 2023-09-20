import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  photoURL: {
    type: String,
    default: 'https://i.ibb.co/8438Xbj/food-items-vector-609544.jpg'
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
  retired: { 
    type: Boolean,
    default: false,
  },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
