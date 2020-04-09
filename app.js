require("dotenv").config();
const express = require("express");
const app = express();

app.get("/hello",(req, res) => {
    res.json({
        success: 1, 
        msg: "Welcome to Node with Express 4",
    });
});

app.listen(process.env.APP_PORT, () => {
    console.log(`Serveur démarre sur le port : ${process.env.APP_PORT}`);
});