import cartModel from "./cartModel.js"
import cartRepository from "./cartRepository.js";

export default class cartController{


        constructor(){

                this.cartRepository=new cartRepository();

        }

        async addItem(req,res){
                       try{
                const {productId,quantity}=req.body;
                console.log(req)
                const userId=req.userId;
               
               await  this.cartRepository.add(productId,userId,quantity)
                res.status(200).send("Cart Item Updated")}
                catch(err){
                                console.log("Error at: ", err);
                                res.status(500).send(err)
                }
        }   

        get(req,res){

                const userId=req.userId;
                console.log(userId)
                const items=cartModel.displayCart(userId);
                console.log(items)
                return res.status(200).send(items)
        }
        
}