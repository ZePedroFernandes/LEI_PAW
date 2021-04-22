const express = require('express');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/file_upload', upload.single('file'), function (req, res) {
    let file = req.file;
    file.filename = file.originalname;
    console.log(req.file, req.body);
    res.sendStatus(200)
})

app.get('/getfile', function (req, res) {
    let name = req.query.fname;
    let path = __dirname + "/uploads/" + name;
    if (fs.existsSync(path)) {
        res.sendFile(path);
    } else {
        console.log('File not found');
        res.sendStatus(404)
    }
})

app.listen(3000, function () {
    console.log("Server initialized in: http://localhost:3000/");
})