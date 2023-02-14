// **Synchronous or blocking
// code is executed line by line 

// **Asynchronous or non blocking
// line by line execution is not guranteed

const fs = require("fs");
fs.readFile("dele.text", "utf-8", (err,data) =>{
    console.log(data);
});
console.log("This is a message");