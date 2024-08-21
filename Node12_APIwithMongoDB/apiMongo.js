const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

const mongodb = require('mongodb');   // we imported this to make object id instance

app.use(express.json());  // post man se data node js pe bhejte hai to ise add karte hai -> data ko convert karlete hai taki wo hame available hojaye
// req se body get karta hai

app.get('/',async (req,res) =>{
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
});

app.post('/',async (req,res) =>{
    let data = await dbConnect();
    // console.log(req.body);   // body is property
    let result = await data.insertOne(req.body);
    res.send(result);

});

app.put('/',async (req,res) =>{
    let data = await dbConnect();
    let result = data.updateOne(
        {name : req.body.name},
        {$set : req.body}
    )
    res.send({result:"updated"});
});
// app.put('/:name',async (req,res) =>{
//     let data = await dbConnect();
//     let result = data.updateOne(
//         {name : req.params.name},
//         {$set : req.body}
//     )
//     res.send({result:"updated"});
// });

app.delete("/:id",async (req,res)=>{
    // console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id : new mongodb.ObjectId(req.params.id)});// ise hamne object id ka instance banaya hai kyuki mongoDb me Object id hoti naki id
    // is instance ko ham mongodb ke object se bana sakte hai ... uska ek object hota hai mongodb.ObjectId
    res.send(result);
});
app.listen(5000);


// create a api tp send hello world 

