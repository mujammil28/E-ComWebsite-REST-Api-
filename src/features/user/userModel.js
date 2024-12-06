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
        static SignIn(email,password){
            const userSignin=users.find((u)=>u.email==email && u.password==password );
               return userSignin;
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