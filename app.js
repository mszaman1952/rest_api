const path = require('path');
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require('./routes/users.route')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static('views'))

app.use("/users",usersRouter);

// Home Route ==============================

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

// user error =============================== 

app.use((req, res, next) => {
    res.status(404).json({
        message : "Route Not Found"
    });
});

// app.use((err, req, res, next) => {
//     res.status(500).json({
//         message : "Something Broke"
//     });
// });

// server error =============================

module.exports =app;

