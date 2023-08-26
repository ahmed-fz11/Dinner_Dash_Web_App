import express from 'express'
import itemRoutes from './itemRoutes.js'
//import other route modules

const router = express.Router();

router.use("/items",itemRoutes);

export default router;
