import User from "../models/User.js";

export const registerUser = (req, res) => {
  User.findOne({ email: req.body.email })
    .then(existingUser => {
      if (existingUser) {
        // User with the same email already exists
        return res.status(409).json({
          success: false,
          message: "User with this email already exists",
        });
      }

      // Create a new user instance
      const user = new User(req.body);

      // Save the new user
      return user.save();
    })
    .then(newUser => {
      res.status(201).json({
        success: true,
        message: "User created successfully",
        user: newUser,
      });
    })
    .catch(err => {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: err.message,
      });
    });
};
