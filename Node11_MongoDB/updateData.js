const dbConnect = require('./mongodb');

const updatedb = async ()=>{
    let data = await dbConnect();
    let  result = await data.updateOne(
        // we have tp pass two objects 
        // first one to specify the data object where changes are to be made
        // second one  to make actual changes
        {name : 'iphone11'},             // Obj 1
        {
           $set: {name : 'iphone12'}      // Obj 2
        }
    );
    console.log(result);
        
}
updatedb();