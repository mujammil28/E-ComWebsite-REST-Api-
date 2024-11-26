export default class userModel{

        constructor(name,id,email,type){
            this.name=name;
            this.id=id;
            this.password=password;
            this.email=email;
            this.type=type;
        }

        static signUp(name,email, password, type){
            const newUser=new userModel(
                name,email,password,type
            );
            newUser.id=users.length+1;
            users.push(newUser);
            return newUser;

        }
        static signIn(email,password){
            const signIn=users.find(u=>u.email===email&& u.password===password);
            return signIn;
        }
}

var users=[{
    name:"seler User",
    id:1,
    password:"Pass@123",
    email:"Sseller@1.com",
    type:"Seller"
}]