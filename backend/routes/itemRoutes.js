import express from 'express'
import { getAllItems,getItemsbyCategory } from '../controllers/itemController.js';

const router = express.Router();

router.get("/",getAllItems);
router.get("/:category",getItemsbyCategory)

export default router;