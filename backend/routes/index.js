import express from 'express'
import itemRoutes from './itemRoutes.js'
import signUpRoutes from './signUpRoutes.js'
import loginRoutes from './loginRoutes.js'
import adminRoutes from './adminRoutes.js'
import userRoutes from './userRoutes.js'
//import other route modules

const router = express.Router();

router.use("/signup",signUpRoutes);
router.use("/login",loginRoutes);
router.use("/items",itemRoutes);
router.use('/admin',adminRoutes)
router.use('/user',userRoutes)

export default router;
