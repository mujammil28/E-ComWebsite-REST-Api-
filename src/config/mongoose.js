import mongoose from "mongoose";


const url="mongodb://localhost:27017/ecomdb";

export const mongooseDB= async()=>{


    try{

            await mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology:true})

            console.log("Mongoose DB connected Successfully...")

    }catch(err){

        console.log("Error occure in Mongoose DB!!!")
    }

}