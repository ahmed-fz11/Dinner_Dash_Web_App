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
  photoURI: String,
  categories: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
    enum: ["available", "not available"],
  },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
