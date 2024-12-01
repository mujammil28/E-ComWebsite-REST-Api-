
import userModel from "./userModel.js";

import jwt from 'jsonwebtoken';

export default class userController{

    signUp(req,res){

            const {name,email,password,type}=req.body;
            userModel.signUp(name,email,password,type)
            res.status(201).send("User Created")
                
    }

    signIn(req,res){

        const result=userModel.SignIn(req.body.email,req.body.password);

        if(!result){
       return res.status(400).send("SignIn Failed")}
       else{
        
        const token=jwt.sign(({UserId:result.id,UserEmial:result.password})
        ,'hQxzEGZjRodpNBADkhaZ1Ou4IUCBJfY3',{
            expiresIn:'1h',
        })
            res.status(200).send(token);
    }
    }

}