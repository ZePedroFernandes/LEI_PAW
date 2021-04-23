const express = require('express');
const fs = require('fs');
const querystring = require('querystring');
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'tmp/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

var upload = multer({ storage: storage })

const app = express();
app.use(upload.single('file'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/htmls/index.html");
})

app.get('/form', function (req, res) {
    res.sendFile(__dirname + "/htmls/form.html");
})

app.get('/form_style_sheet.css', function (req, res) {
    res.sendFile(__dirname + "/" + "form_style_sheet.css");
});

app.post('/formSubmit', function (req, res) {
    fs.readFile(__dirname + '/nextID.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        let nextID = JSON.parse(data).nextID;
        let path = __dirname + '/forms/form_' + nextID + '.json';

        var request = "";
        req.on('data', function (chunk) { request += chunk })
        req.on('end', function () {

            let formResponse = querystring.parse(request);
            formResponse["id"] = nextID;

            stringResponse = JSON.stringify(formResponse);

            fs.writeFile(path, stringResponse, 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    let nextIDString = "\{\"nextID\": " + (nextID + 1) + "\}";
                    fs.writeFileSync(__dirname + "/nextID.json", nextIDString);
                }

                res.send(`<h1>Your form has this id: ${nextID}</h1>`)
            });
        })
    });

})

app.get('/seeForm', function (req, res) {
    let formID = req.query.id;
    if (!formID) {
        res.sendStatus(400);
    }
    filePath = __dirname + "/forms/form_" + formID + ".json";
    res.sendFile(filePath)
})


app.listen(3000);