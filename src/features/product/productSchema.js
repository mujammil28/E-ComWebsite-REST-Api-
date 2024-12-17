import mongoose from 'mongoose';

const productSchema=new mongoose.Schema({

        name:String,
        desc:String,
        category:String,
        price:Number,

})