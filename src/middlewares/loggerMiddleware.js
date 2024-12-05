import fs from 'fs';
import winston from 'winston';

const fsPromise=fs.promises

// async function logger(logdata){

// //     try{
// //         logdata=`\n${new Date().toString()} . : ${logdata}`;

// //         await fsPromise.appendFile('log.txt',logdata);
// // }  catch(err){

// //             console.log(err)
// // }

// }       

const logger=winston.createLogger({
    level:'info',
    format:winston.format.json(),
    defaultMeta:{service:'request-logging'},
    transport:[
        new winston.transports.File({filename:'logs.txt'})
    ]
});



    const loggerFunc=async (req,res,next)=>{

        const logedData=`${req.url}  ${JSON.stringify(req.body)}`

        logger.info(logedData)
        
        next();
    }


    export default loggerFunc;