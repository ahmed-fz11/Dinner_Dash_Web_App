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
  password: {
    type:String,
    required: true
  },
  role: {
    type: String,
    enum : ['admin','user'],
    required:true
  },
  orders: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Order'
    }
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
