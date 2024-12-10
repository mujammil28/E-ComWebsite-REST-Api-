import express from 'express';
import cartController from'./cartController.js'


const cartRouter=express.Router();

const cartControl =new cartController();

cartRouter.post('/',(req, res, next)=>{

    cartControl.addItem(req, res, next);
});
cartRouter.get('/',(req, res, next)=>{

    cartControl.get(req, res, next);
})


export default cartRouter;