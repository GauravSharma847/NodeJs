// const dbConnect = require('./mongodb');

// const insert = async ()=>{
//     const db = await dbConnect();

//     // const result = await db.insertOne(
//     const result = await db.insertMany(
//         [
//             {name : 'mi25',brand : 'Xiomi',price : 14000, category: 'mobile'},
//             {name : 'canvas', brand : 'micromax', price : 10000, category : 'mobile'}
//         ]
//     );

//     if(result.acknowledged){
//         console.log("Data Inserted");
//     }
// }
// insert();














/////////////////////////////////////////////////////////

const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    console.log(db);
    const result = await db.insertMany(
        [
            {name : "y 20", brand : "vivo", price : 30000},
            {name : "i phone 10", brand : "apple", price : 60000},
            {name : "s24 ultra", brand : "samsung", price : 150000},
        ]
    );
    if(result.acknowledged) {
        console.log("Data Inserted");
    }
} 

insert();