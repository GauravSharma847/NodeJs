const fs = require("fs");
let text = fs.readFileSync("read.txt", "utf-8");
text = text.replace("Gaurav", "Saurabh");

console.log("Content of the file is");
console.log(text);

console.log("Creating a new file");
fs.writeFileSync("newRead.txt", text)