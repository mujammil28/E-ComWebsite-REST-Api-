import express from 'express';
import router from './src/features/product/productRouts.js';
import bodyParser from 'body-parser';
const server=express();

server.use(bodyParser.json())

server.use('/api/products',router)

server.get("/",(req,res)=>{
    res.send('Welcome to Api Server');

})

server.listen(5000,()=>{
    console.log("server is running on localhost:5000")
})