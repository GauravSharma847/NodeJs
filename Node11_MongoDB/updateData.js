// const dbConnect = require('./mongodb');

// const updatedb = async ()=>{
//     let data = await dbConnect();
//     let  result = await data.updateOne(
//         // we have tp pass two objects 
//         // first one to specify the data object where changes are to be made
//         // second one  to make actual changes
//         {name : 'iphone11'},             // Obj 1
//         {
//            $set: {name : 'iphone12'}      // Obj 2
//         }
//     );
//     console.log(result);
        
// }
// updatedb();




////////////////////////////////////////////////////////////////////////////////

const dbConnect = require('./mongodb');

let updateData =  async () => {
    const db = await dbConnect();
    let result = await db.updateOne(
        {brand : 'vivo'},{
            $set : {brand : 'VIVOX'}
        }
    );
    if(result.modifiedCount > 0){
        console.log("Data Updated");
    } else {
        console.log("Data has already been Updated");
    }
}


updateData();