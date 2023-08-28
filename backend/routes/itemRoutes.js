import express from 'express'
import { getAllItems,getItem,getItemsbyCategory } from '../controllers/itemController.js';

const router = express.Router();

router.get("/",getAllItems);
router.get('/item/:itemId',getItem)
router.get("/category/:category",getItemsbyCategory)

export default router;