const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-comm");

const PrductSchema = new mongoose.Schema({
    name:String, 
    brand:String,       
    price:Number,
    category:String

});

const saveInDb = async ()=>{ 
    const ProductModel = mongoose.model('products',PrductSchema);
    let data = new ProductModel({name:"Note Pro", brand:"Maxx" ,price: 20000, category : "mobile"});  // here only name will be entered 
    let result = await data.save();
    console.log(result);
}

const updateInDb = async ()=>{
    const Product = mongoose.model('products',PrductSchema);
    let data =await Product.updateOne(
        {name : "iphone7"},
        {
            $set: {price : 90000, name: "iphone8.1"}
        }
    )
    console.log(data);

}


const deleteInDb = async ()=>{
    const Product = mongoose.model('products',PrductSchema);
    let data =await Product.deleteOne(
        {name : "iphone6"}
    )
    console.log(data);
}



const findInDb = async ()=>{
    const Product = mongoose.model('products',PrductSchema);
    // let data =await Product.find({});
    let data =await Product.find({name : "iphone8.1"});
    console.log(data);
}
// saveInDb();
// updateInDb();
// deleteInDb();
findInDb();
