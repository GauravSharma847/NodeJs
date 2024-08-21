const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

let database = 'e-comm';

async function getData() {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('products');
    let resp = await collection.find({name : 'vivo'}).toArray()
    console.log(resp);
}

getData();






