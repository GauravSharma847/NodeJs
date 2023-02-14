const mongoose = require('mongoose');

const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm")
    const PrductSchema = new mongoose.Schema({
        name:String        // this is to give validation in schema that one name field should be entered
        // price:Number    // to neter both price and name
    });
    const ProductModel = mongoose.model('products',PrductSchema);
    let data = new ProductModel({name:"m8", price: 20000});  // here only name will be entered 
    let result = await data.save();
    console.log(result);
}


main();