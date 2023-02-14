const dbConnect = require('./mongodb');

const deleteData = async ()=>{
    let data = await dbConnect();
    let result = await data.deleteOne({name : 'iphone12'});  // this data returns a promise so to handle that I used await

    // let result = await data.deleteMany({name : 'iphone12'}); 
    // it deletes multiple record of same match

    if(result.acknowledged){
        console.warn("Record Deleted");
    }
}


deleteData();