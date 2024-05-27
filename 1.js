const express = require('express');

const app = express();
const port = 3000;


// adding middleware 
app.use(express.json());
app.use(express.urlencoded({extended :true}))



const json_file ={
    "name":"surya",
    "palce":"uthamapalayam",
    "s/o":"JESUS"
}
app.get('/',(req,res)=>{
    console.log("Running");
    console.log("JESUS");
    res.send("JESUS")
}); 

app.get('/data',(req,res)=>{
    res.send({json_file});
}); 


// post man, content 

app.post('/data',(req,res)=>{
    res.send(req.body);
    console.log(req.body);
});
app.listen(port, ()=>{
    console.log("Server is running on  "+ port);
    console.log("http://localhost:"+port);
});