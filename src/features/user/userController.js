
import userModel from "./userModel.js";

import jwt from 'jsonwebtoken';

export default class userController{

   async signUp(req,res){

            const {name,email,password,type}=req.body;
            const user= await userModel.signUp(name,email,password,type)
            res.status(201).send(user)
                
    }

   async signIn(req,res){

        const result=await userModel.SignIn(req.body.email,req.body.password);

        if(!result){
       return res.status(400).send("SignIn Failed")}
       else{
        
        const token=jwt.sign(({UserId:result.id,UserPassword:result.password})
        ,'hQxzEGZjRodpNBADkhaZ1Ou4IUCBJfY3',{
            expiresIn:'1h',
        })

        console.log(token)
            res.status(200).send(token);
    }
    }

}