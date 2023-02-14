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

// Application Level Route
app.use(reqFilter);

app.get("",(_,res) =>{
    res.send("Welcome to Home Page")
});
app.get("/user",(_,res) =>{
    res.send("Welcome to User Page")
});


app.listen(5000);


////////////////////////////////////////////////////////////////////////


