import express from 'express';
import userController from './userController.js';

const userRouter=express.Router();

const usercontroller=new userController();


userRouter.post('/signUp',usercontroller.signUp)

userRouter.post('/signIn',usercontroller.signIn);

export default userRouter;
