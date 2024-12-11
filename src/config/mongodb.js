import {MongoClient} from 'mongodb';


const url="mongodb://localhost:27017/ecomdb";

let client;
export const mongoConnect=()=>{

                MongoClient.connect(url)
                .then(clientInstance=>{
                    client= clientInstance
                    console.log("MongoDb Connected!!!");
                    createIndex(client.db())
                })
                .catch(err=>{
                    console.log(err);
                })  
}

export const getdb=()=>{

            return client.db();
}


const createIndex= async(db)=>
    {
       try{ 
        
        await db.collection("users").createIndex({name:"text"});
        await db.collection("users").createIndex({type:"text"});
            console.log("Indexs created")
        }
            catch(err){
                console.log(err);
            }
}       