    import {getdb} from '../../config/mongodb.js'
class cartRepository{


    constructor()
{
            this.collection="cartItems";
}
    async add(productId, userId, quantity){

        try{
        const db= getdb();
        const collection=db.collection(this.collection);

        await collection.insertOne({productId, userId, quantity})
        }catch(err){
            
            console.log("Error at adding cart item");
        }

    }


}


export default cartRepository;