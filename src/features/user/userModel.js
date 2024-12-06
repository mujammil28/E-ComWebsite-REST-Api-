import { getdb } from "../../config/mongodb.js";

export default class userModel{

        constructor(name,email,password,type){
            this.name=name;
            this.password=password;
            this.email=email;
            this.type=type;
        }

       static async signUp(name,email, password, type){

            try{            const db=getdb();

            const collection=db.collection("users")

            const newUser=new userModel(
                name,email,password,type
            );
           
           await collection.insertOne(newUser);
            return newUser;
}       catch(err){
            
             console.log("Database Error: ",err);
}
        }
        static async SignIn(email,password){
           try{
            const db = getdb();
            // 2. Get the collection
            const collection = db.collection("users");
            
            // 3. Find the document.
            return await collection.findOne({email, password});
           }catch(err){
            console.log(err);
           }

        }

        static getAll(){
            return users;
        }
}

let users=[{
    name:"seler User",
    id:1,
    password:"Pass@123",
    email:"Seller@1.com",
    type:"Seller"
},{
    name:"Customer User",
    id:2,
    password:"cus@123",
    email:"Customer@1.com",
    type:"Customer"
}]