import express from 'express'
import { authenticateJWT } from '../middlewares/authenticationMiddleware.js'
import {getUserOrders, placeOrder} from '../controllers/userController.js'

const router = express.Router();

//router.post('/order',authenticateJWT,placeOrder) //placing order

router.post('/orders',authenticateJWT,placeOrder) //placing order //for testing
router.get('/orders',authenticateJWT,getUserOrders) //getting all orders of this specific user

export default router;