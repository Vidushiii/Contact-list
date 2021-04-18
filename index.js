const express = require('express');
//const path = require('path');
const port = 8000;

const app = express();

app.listen(port, function (err) {
    if (err) {
        console.log("errorr errorr", err);
    }
    console.log('working on port no. ', port);
});
