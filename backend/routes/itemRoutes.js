import express from 'express'
import { getAllCategories, getAllItems,getItem,getItemsbyCategory } from '../controllers/itemController.js';

const router = express.Router();

router.get("/",getAllItems);
router.get('/item/:itemId',getItem)
router.get("/category/:category",getItemsbyCategory)
router.get('/categories',getAllCategories)

export default router;