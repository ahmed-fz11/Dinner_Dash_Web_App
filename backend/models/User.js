import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  displayname: {
    type: String,
    minlength: 2,
    maxlength: 32,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  orders: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Order'
    }
  ],
  cart: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
      },
      quantity: {
        type: Number,
        min: 1,
        default: 1,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
