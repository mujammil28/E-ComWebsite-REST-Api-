
export default class cartModel{

        constructor(productId,userId,quantity,id){

            this.id=id;
            this.productId=productId;
            this.userId=userId;
            this.quantity=quantity;
        }

        static addItem(productId,userId,quantity){
            const cartItem=new cartModel(productId,userId,quantity); 
            cartItem.id=Number(cartItems.length+1);
            console.log(cartItem)
            cartItems.push(cartItem);
            console.log(cartItems)
            return cartItem;
        }

        static displayCart(userId){

            const cartProduct=cartItems.filter((p)=>p.id===Number(userId));
            return cartProduct
        }


}


var cartItems=[
    new cartModel(1,2,1,1),
    new cartModel(1,1,1,1)

]