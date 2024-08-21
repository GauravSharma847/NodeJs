// const fs = require('fs');

// const input = process.argv;
// if(input[2] == 'add'){
//     fs.writeFileSync(input[3],input[4]);
// }else if(input[2] == 'remove'){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log("Invalid Input");
// }





// node fileCreationCommandLine.js add data.txt "this is a fruit"; 


const fs = require('fs');
const input = process.argv;
if(input[2] == 'add') {
    const content = input.slice(4).join(' ');
    fs.writeFileSync(input[3],content);
} else if(input[2] == 'remove'){
    fs.unlinkSync(input[3]);
} else {
    console.log("Invalid Input");
}