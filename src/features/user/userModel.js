export default class userModel{

        constructor(name,email,password,type,id){
            this.name=name;
            this.password=password;
            this.email=email;
            this.type=type;
            this.id=id;
        }

        static signUp(name,email, password, type){
            const newUser=new userModel(
                name,email,password,type
            );
            newUser.id=users.length+1;
            users.push(newUser);
         
            return newUser;

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