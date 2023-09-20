import express from 'express'
import { requireAdmin } from '../middlewares/authorizationMiddleware.js'
import { authenticateJWT } from '../middlewares/authenticationMiddleware.js'
import { assignRemoveItemsFromCategory, createCategory, createItem, getAllOrders, getOrder, retireItem, updateItem , getUser, changeOrderStatus} from '../controllers/adminController.js';

const router = express.Router();

//router.post('/items',authenticateJWT,requireAdmin,middlewareFromController)

router.post('/items',createItem) //create a new item listing
router.put('/items/:itemId',updateItem) //Modify existing items’ name, description, price, and photo
router.post('/categories',createCategory) //Create named categories for items
router.put('/items/:itemId/retire',retireItem) //mark an item as retired
router.get('/orders',getAllOrders) //getting all orders
router.get('/orders/:orderId',getOrder) //get a specific order
router.put('/orders/:orderId/:status',changeOrderStatus) //change order status to :status that is passed
router.put('/categories/:categoryId/items/:itemId',assignRemoveItemsFromCategory)
router.get('/userinfo/:userid',getUser)

export default router