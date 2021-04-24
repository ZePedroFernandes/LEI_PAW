var express = require('express');
var querystring = require('querystring');
var fs = require('fs');
var path = require('path');
var multer = require('multer');
var reviewsDir = 'data'
var reviewsPath = path.join(__dirname, '..', 'public', reviewsDir);


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/data/')
    },
    filename: function (req, file, cb) {
        cb(null, getImageName(req, file));
    }
});

var data = multer({ storage: storage });

var router = express.Router();

//  var imgUpload = data.single('image');

router.get('/review', function (req, res) {
    //console.log(req.query);

    let errors = [];

    if (req.query.errors instanceof Array) {
        errors = req.query.errors;
    } else {
        errors = [req.query.errors];
    }

    const params = req.query;
    delete params.errors;

    // console.log("Entering render phase");
    // console.log(errors);
    console.log(params);


    res.render('index.ejs', { title: 'Review', errors, params })
});

/* POST book review form */
router.post('/review', data.single('image'), function (req, res) {
    // console.log(req.file);
    const image = req.file;
    const allowedImgExtensions = ['.jpg', '.png'];

    let params = {
        title: 'Book Review',
        ...req.body
    };

    const errors = [];

    if (!params.book) {
        errors.push("Missing book field");
    } else if (params.book.trim() === '') {
        errors.push("Book name cannot be blank");
    }

    if (!params.name) {
        errors.push("Missing name field");
    } else {
        if (params.name.trim() === '') {
            errors.push("Name cannot be blank");
        }
    }

    if (!params.email) {
        errors.push("Missing email field");
    } else {
        if (params.email.trim() === '') {
            errors.push("Email cannot be blank");
        }
    }

    if (!params.readed) {
        errors.push("Missing read or not read option")
    }

    if (image) {
        params.imagePath = `/${reviewsDir}/${getImageName(req, req.file)}`;
        const fileExtension = path.extname(image.originalname);
        if (!allowedImgExtensions.includes(fileExtension)) {
            errors.push("Invalid File Extension")
        }
    }

    if (errors.length > 0) {
        const query = querystring.stringify({
            errors,
            name: params.name,
            email: params.email,
            book: params.book,
            description: params.description,
            readed: params.readed
        });
        return res.redirect('/books/review?' + query);
    }

    const reviewID = `${params.email}_${params.book}`;

    const bookName = reviewID + '.json';
    const bookReviewPath = path.join(reviewsPath, bookName);

    fs.writeFileSync(bookReviewPath, JSON.stringify(params));

    console.log(params);

    res.render('bookReview', params);
});

/* GET book review */
router.get('/review/:email/:livro', function (req, res, next) {
    const bookName = `${req.params.email}_${req.params.livro}.json`;
    const bookReviewPath = path.join(reviewsPath, bookName);

    try {
        const bookReviewJSON = fs.readFileSync(bookReviewPath, 'utf8');
        let review = JSON.parse(bookReviewJSON);
        res.status(200).render('bookReview', review);
    } catch (e) {
        res.status(404).send(`Review ${bookName} doesn´t exist`);
    }

});

router.get('/reviews', function (req, res) {

    let reviews = [];

    fs.readdirSync(reviewsPath).forEach(file => {
        const bookReviewPath = path.join(reviewsPath, file);

        try {
            const bookReviewJSON = fs.readFileSync(bookReviewPath, 'utf8');
            let review = JSON.parse(bookReviewJSON);
            reviews.push(review);
        } catch (e) {
        }
    });

    res.status(200).render('bookTable', { reviews: reviews });
});

function getImageName(req, file) {
    const reviewID = `${req.body.email}_${req.body.book}`;
    const imageExtension = path.extname(file.originalname);
    const imageName = reviewID + imageExtension;
    return imageName;
}

module.exports = router;
