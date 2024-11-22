import express from 'express';
import * as productRouter from './src/features/product/productRouts'

const server=express();

server.use('/api/products',productRouter)


server.get("/",(req,res)=>{
    res.send('Welcome to Api Server');
})

server.listen(5000,()=>{
    console.log("server is running on localhost:5000")
})