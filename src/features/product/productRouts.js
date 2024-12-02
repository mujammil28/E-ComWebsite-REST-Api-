import express from 'express';
import productController from './productControllers.js';
import { upload } from '../../middlewares/fileUploadMiddleware.js';

const router=express.Router();

const productControl =new productController();

router.get('/',productControl.getProduct);

router.post('/',productControl.addProduct);

router.post('/rating',productControl.rateProduct)

router.get(
    '/filter',
    productControl.filterProducts
  );
  
  router.post(
    '/',
    upload.single('imageUrl'),
    productControl.addProduct
  );
  router.get(
    '/:id',
    productControl.addOneProduct
  );

export default router;