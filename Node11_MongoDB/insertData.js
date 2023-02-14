const dbConnect = require('./mongodb');

const insert = async ()=>{
    const db = await dbConnect();

    // const result = await db.insertOne(
    const result = await db.insertMany(
        [
            {name : 'mi25',brand : 'Xiomi',price : 14000, category: 'mobile'},
            {name : 'canvas', brand : 'micromax', price : 10000, category : 'mobile'}
        ]
    );

    if(result.acknowledged){
        console.log("Data Inserted");
    }
}
insert();