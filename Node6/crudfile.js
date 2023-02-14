const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'CRUD');
const filePath = `${dirPath}/apple.txt`;

//Create
// fs.writeFileSync(filePath,"This is Gaurav Sharma");

//Read
// fs.readFile(filePath,'utf8',(err,item)=>{
    // why we put utf 8 or why the output was in buffer
    // buffer is a temporary memory location , nodejs needs a temporary memory to store data 
    // console.log(item);
// })


//UPDATE

// fs.appendFile(filePath," ,Software Enginner",(err)=>{
//     if(!err){
//         console.log("File Updated Successfully");
//     }
// });

//RENAME

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err) =>{
//     if(!err){
//         console.log("File Name Updated Successfully");
//     }
// })


//DELETE

fs.unlinkSync(`${dirPath}/fruit.txt`);