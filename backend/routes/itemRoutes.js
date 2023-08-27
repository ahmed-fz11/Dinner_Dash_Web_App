import express from 'express'
import { getAllItems,getItem,getItemsbyCategory } from '../controllers/itemController.js';

const router = express.Router();

router.get("/",getAllItems);
router.get('/:itemId',getItem)
router.get("/:category",getItemsbyCategory)

export default router;