import express from 'express';
import router from './src/features/product/productRouts.js';
import bodyParser from 'body-parser';
import userRouter from './src/features/user/userRouts.js';
//import authBasic from './src/middlewares/authBasics.js';
import jwtAuth from './src/middlewares/jwtMiddleware.js';


const server=express();

server.use(bodyParser.json())

server.use('/api/products',jwtAuth,router)
server.use('/api/user',userRouter)

server.get("/",(req,res)=>{
    res.send('Welcome to Api Server');

})

server.listen(5000,()=>{
    console.log("server is running on localhost:5000")
})