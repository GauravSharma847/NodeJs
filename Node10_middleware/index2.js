const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();

route.use(reqFilter);

// Route Level Middleware

app.get("",(_,res) =>{
    res.send("Welcome to Home Page")
});

app.get("/user", (_,res) =>{
    res.send("Welcome to User Page")
});
route.get("/about",(_,res) =>{
    res.send("Welcome to About Page")
});
route.get("/contact",(_,res) =>{
    res.send("Welcome to Contact Page")
});

app.use('/',route);
app.listen(5000);