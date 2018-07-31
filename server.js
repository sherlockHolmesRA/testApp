const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = 3009;

app.use(bodyparser.json());

app.get("/test", (req, res)=>{
    res.send("just testing my function");
})

app.listen(`${port}`, err => console.log("I'm listening"));

