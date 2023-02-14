const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer({  // mu;lter is a function jisme objects jata hai
    storage: multer.diskStorage({           // 1st object   (diskStorage is multer function jobhi object leta hai)
        destination: function(req, file, cb){        // file upload karni kha hai
            cb(null,"uploads");   // 2nd param is folder where we want to upload our file
        },
        filename: function(req, file, cb){
            cb(null, file.fieldname + "-" + Date.now() + ".jpeg");
        }
    })
}).single("user_file");


app.post("/upload",upload,(req,res)=>{       // 2nd ye ek middleware functionh hai  
    res.send("File Uploaded");
});

app.listen(5000);

