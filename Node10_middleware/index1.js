const express = require('express');
const reqFilter = require('./middleware');
const app = express();


// const reqFilter = (req, res, next) =>{
//     if(!req.query.age){
//         res.send("Please Provide age");
//     }else if(req.query.age < 18){
//         res.send("You cannot access this page");
//     }else{
//         next();
//     }
// } 

// Route Level Middleware

app.get("",(_,res) =>{
    res.send("Welcome to Home Page")
});

app.get("/user",reqFilter, (_,res) =>{
    res.send("Welcome to User Page")
});
app.get("/about",(_,res) =>{
    res.send("Welcome to About Page")
});


app.listen(5000);