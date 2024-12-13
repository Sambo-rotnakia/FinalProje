import express from 'express';
import path from 'path';

var app = express()

app.get('/test', function(req,res){
    res.sendFile(path.join(__dirname,'views/pages','index.html'));
})

app.listen(8080);
console.log("Server is listening ")
