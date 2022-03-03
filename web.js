const express = require("express");
const { dirname } = require("path");
const app = express ();

const path = require("path")


app.get("/", (req, res) =>{

res.sendFile(path.join(__dirname +"/index.html"));
}); 


app.get('/parte', function(req, res) {
    res.sendFile(path.join(__dirname, '/parte.html'));
})

app.listen (3000, ()=> {
    console.log ("Tu server esta corriendo", 3000);
});

