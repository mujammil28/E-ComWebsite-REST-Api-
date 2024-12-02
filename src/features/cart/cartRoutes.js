import express from 'express';
import catController from'./cartController.js'


const cartRouter=express.Router();

const cartControl =new catController();

cartRouter.post('/',cartControl.addItem);
cartRouter.get('/',cartControl.get)


export default cartRouter;