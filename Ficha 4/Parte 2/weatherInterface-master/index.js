const express = require('express');
const fs = require('fs').promises;
const app = express();

app.get('/', function (req, res) {
    console.log("Logged in");
    res.sendFile(__dirname + "/main.html");
})

app.post('/coords', function (req, res) {
    let lat = req.query.lat;
    let lon = req.query.lon;

    if (lat && lon) {
        let log = "lat: " + lat + "\nlong: " + lon + "\n\n";

        fs.appendFile('logs.txt', log);
        res.status('201').send("Sucess");
    } else {
        res.status('400').send("Insucess");
    }
})

app.get('*', function (req, res) {
    // convem fazer um log de pedidos errados
    res.status('404').send(/*__dirname + "index404.html"*/);
})


app.listen(3000);