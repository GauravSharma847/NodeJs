const express = require('express');
const con = require("./config");
const app = express();
app.use(express.json());
// app.get("/",(req,res)=>{
//     // res.send("route done");
//     con.query("select * from users",(err,result)=>{
//         if(err)
//         {
//             res.send("some error");
//         }
//         else{
//             res.send(result);
//         }
//     })
// });

app.post("/",(req,res)=>{
    const data = {id:'1',name : "Gaurav",password :'3030',user_type: "visitor"};
    con.query("INSERT INTO users SET?", data ,(err,result,fields)=>{
        if(err) error;
        res.send(result);

    })
});


app.listen(5000);