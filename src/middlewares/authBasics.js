import userModel from "../features/user/userModel.js";

const authBasic=(req,res,next)=>{

            const authHeaders=req.headers["authorization"];
        console.log(authHeaders)
            if(!authHeaders){

                    res.status(401).send("Authorization not found");

            }
                //encoded value:[Basic wertyu2345sdfzxc23]
            const base64Credentials=authHeaders.replace('Basic ','');
            console.log(base64Credentials);

            const decodeCreds=Buffer.from(base64Credentials,'base64').toString()
            console.log(decodeCreds);

            const creds=decodeCreds.split(':');
                console.log(creds)
            const users=userModel.getAll().find(u=>u.email===creds[0] && u.password==creds[1])
            console.log(users)
            if(users){
                next();
            }
            else{
                res.status(401).send("User Not Found")
            }



    

        }   

        export default authBasic;