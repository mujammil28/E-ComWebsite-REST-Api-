import {MongoClient} from 'mongodb';


const url="mongodb://localhost:27017/ecomdb";


const mongoConnect=()=>{

                MongoClient.connect(url)
                .then(client=>console.log("MongoDb Connected!!!"))
                .catch(err=>{
                    console.log(err);
                })  
}

export default mongoConnect;