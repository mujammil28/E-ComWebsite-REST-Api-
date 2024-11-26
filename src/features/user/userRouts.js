import express from 'express';
import userController from './userController.js';

const router=express.Router();

const usercontroller=new userController();

router.post('/signUp',usercontroller.signUp)

router.post('/signIn',usercontroller.signIn);

export default router;
