const express = require("express");
const app = express();
const port = 3000;
const path = require('path');


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get("/about.html", function(req, res) {
    res.sendFile(path.join(__dirname, './about.html'));
});

app.get("/contact.html", function(req, res) {
    res.sendFile(path.join(__dirname, './contact.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


