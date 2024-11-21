import express from 'express';


const server=express();


server.get("/",(req,res)=>{
    res.send('Welcome to Api Server');
})

server.listen(5000,()=>{
    console.log("server is running on localhost:5000")
})