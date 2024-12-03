import fs from 'fs';

const fsPromise=fs.promises

async function logger(logdata){

    try{
        logdata=`\n${new Date().toString()} . : ${logdata}`;

        await fsPromise.appendFile('log.txt',logdata);
}  catch(err){

            console.log(err)
}

}       

    const loggerFunc=async (req,res,next)=>{

        const logedData=`${req.url}  ${JSON.stringify(req.body)}`

        await logger(logedData);
        next();
    }


    export default loggerFunc;