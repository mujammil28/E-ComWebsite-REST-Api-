import express from 'express';
import productController from './productControllers.js';
const router=express.Router();

const productControl =new productController();

router.get('/',productControl.getProduct);

export default router;