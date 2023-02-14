const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'e-comm';
const client = new MongoClient(url);   // i used clied to denote that data is recieved to client from database

async function getData(){
    let result = await client.connect();   // this client return a promise to handle that we use await and to use await we have to make this function async
     
    let db = result.db(database);   // which database to connect
    let collection = db.collection('products'); // which collection to access and connect

    // collection.find({}).toArray()   -> this returns a promise to handle this we put await below line
    let response = await collection.find({}).toArray();  
    console.log(response);

}

getData();