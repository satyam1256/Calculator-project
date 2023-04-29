const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended : true})); // urlencoaded means it can grab information from the server posted. and extended true means 
app.get("/" , function(req ,res){
    res.sendFile(__dirname + "/" + "index.html");
});


app.post("/" , function(req,res){

    var a = Number(req.body.n1);
    var b = Number(req.body.n2);
    // console.log(req.body.n1);  // it extracts the n1 value posted on the server;
    var result = String(a+b);

    res.send("The result of the values is " + result);
    // console.log(req.body.n1);
});


app.get("/bmicalculator" , function(req,res){
    res.sendFile(__dirname + "/" + "bmiCalculator.html");
});


app.post("/bmicalculator" , function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var result = String(weight/((height*height)/10000));
    res.send("The result of the values is " + result);
});


app.listen(3000 , function(){
    console.log("server started on port 3000");
});
