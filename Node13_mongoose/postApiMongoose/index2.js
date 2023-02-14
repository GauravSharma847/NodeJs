const express = require('express');
require('./config'); // importing database file 
const Products = require('./products'); // importing model -> this model also contains schema so we dont need to import that

const app = express();
app.use(express.json());// data jo req me ata hai wo stream me hota hai to use ye json me convert kar deta hai
app.post("/create",async (req,res)=>{
    let data = new Products(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
});

app.get("/list", async (req,res) =>{
    let data = await Products.find();  // note find method bina schema ke bhi chal jayega 
    res.send(data);
});

app.delete("/delete/:_id", async (req,res) =>{
    console.log(req.params);
    let data = await Products.deleteOne(req.params);  
    res.send(data);
});

app.put("/update/:_id", async (req,res)=>{
    let data = await Products.updateOne(
        req.params,
        {$set:req.body}    
    )
    res.send(data);

})

app.listen(5000);