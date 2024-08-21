const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname,'public');

app.set("view engine","ejs");  // set template engine
//Parameter1 -> that wer are using view engine
//Parameter2 -> what package we are using(e.g: ejs)

app.get('',(_,res) =>{
    res.sendFile(`${publicPath}/index.html`);
});
app.get('/profile',(_,res) =>{
    const user = {
        name : 'Gaurav Sharma',
        city : 'Lucknow',
        email : 'gauravsharma8417@gmil.com',
        skills : ['JAVA', 'JS', 'REACT']
    }
    res.render('profile',{user});
});

app.get('/login',(_,res) =>{
    res.render('login');
});

app.listen(5000);