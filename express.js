console.log("JESUS is good");

const express  = require('express');



const app = express();
port = 4000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.get('/data',(req,res)=>{
    res.send("Working")
});

app.post('/post',(req,res)=>{
    res.send(req.body);
    console.log(req.body);
});

app.listen(port, (req,res)=>{
    console.log("Running");
    console.log("JESUS is good");
    console.log("JESUS is the true living GOD");
    console.log("GOD is Almighty");

    console.log("http://localhost:"+port);
    
});


