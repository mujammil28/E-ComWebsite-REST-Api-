import mongoose  from "mongoose";

export const userSchema= new mongoose.Schema({

        name:String,
        password:String,
        email:{type:String, unique:true},
        type:{type:String, enum:["Seller", "Customer"]}

})