const express = require('express');
const EventEmitter = require('events');
const { eventNames } = require('process');

const app = express();
const event = new EventEmitter();

let count = 0;
event.on("countAPI",()=>{
    count++;
    console.log("Event called",count);
})

app.get("/",(req,res) =>{
    res.send("Event Called");
    event.emit("countAPI");
});
app.get("/search",(req,res) =>{
    res.send("Search Event Called");
    event.emit("countAPI");
});
app.get("/update",(req,res) =>{
    res.send("Update Event Called");
    event.emit("countAPI");
});

app.listen(5000);