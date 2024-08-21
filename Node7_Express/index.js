const express = require('express');
const app = express();

// app.get('',(req,res) =>{
    // console.log("Data sent by browser => ",req.query.name);
    // res.send("Thanks "+req.query.name);
// });

app.get('',(req,res) =>{
    res.send(`
        <h1>"This is Home Page</h1>
        <a href ="/about">Go to About Page</a>
    `);
});


app.get('/about',(req,res) =>{
    res.send(`
        <input type ="text" placeholder = "username" value="${req.query.name}"/>
        <button>Click Me</button>
        <a href ="/help">Go to Help Page</a>
    `);
});

app.get('/help',(req,res) =>{
    res.send(`
        <h1>This is Help Page</h1>
        <a href ="/login">Go to Login Page</a>
     `)

});

app.get('/login',(req,res) =>{
    res.send("This is Login Page");
});

app.listen(5000);