const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname,'public');

// it removes the extensions from the route pagwe
app.get('',(_,res) =>{
    res.sendFile(`${publicPath}/index.html`)
});
app.get('/about',(_,res) =>{
    res.sendFile(`${publicPath}/about.html`)
});
app.get('/help',(_,res) =>{
    res.sendFile(`${publicPath}/help.html`)
});
app.get('*',(_,res) =>{  // 404 page
    res.sendFile(`${publicPath}/nopage.html`)
});

app.listen(5000);