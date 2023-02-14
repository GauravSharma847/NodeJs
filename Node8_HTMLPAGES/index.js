const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname,'public');
// console.log(publicPath);

app.use(express.static(publicPath));   // use is a middleware  (function of express js)
// express.static loads public content from publicPath
// app is a executed function f express
// lekin us express ke alag se function bhi hote hai jo . laga ke access karte hai jaise "express.static"
app.listen(5000);
 