const dbConnect = require('./mongodb');


// approach 1 to handle promise
/*
dbConnect().then((resp) =>{    // since dbConnect function returns a promise so we handle that using then .. it recieves data from function after it has been executed

    resp.find({brand : "apple"}).toArray().then((data) =>{          // we again used then because here toArray also returns a promise

        console.log(data);
    })
})
*/

// Approach 2
const main = async () =>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}
main();