import cartModel from "./cartModel.js"


export default class cartController{

        addItem(req,res){

                const {productId,quantity}=req.query;
                const userId=Number(req.userId);
                console.log(userId,productId,quantity)
                cartModel.addItem(productId,userId,quantity)
                res.status(200).send("Cart Item Updated")
        }   

        get(req,res){

                const userId=req.userId;
                console.log(userId)
                const items=cartModel.displayCart(userId);
                console.log(items)
                return res.status(200).send(items)
        }
        
}