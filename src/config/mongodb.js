import {MongoClient} from 'mongodb';


const url="mongodb://localhost:27017/ecomdb";

let client;
export const mongoConnect=()=>{

                MongoClient.connect(url)
                .then(clientInstance=>{
                    client= clientInstance
                    console.log("MongoDb Connected!!!")
                })
                .catch(err=>{
                    console.log(err);
                })  
}

export const getdb=()=>{

            return client.db();
}
