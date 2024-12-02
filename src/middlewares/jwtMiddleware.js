import jwt from 'jsonwebtoken';


const jwtAuth=(req,res,next)=>{

        const token=req.headers['authorization'];
    console.log(token);
        if(!token){

            res.status(401).send("unauthorized login");

        }

        try{
                const payload=jwt.verify(token,'hQxzEGZjRodpNBADkhaZ1Ou4IUCBJfY3');
                console.log(payload)
                req.userId=payload.UserId;
                console.log(req.userId)
        }
        catch(err){

                return res.status(200).send("unauthorized login");
        }

        next();

}

export default jwtAuth;