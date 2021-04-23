var express = require('express');
var querystring = require('querystring');
var fs = require('fs');
var path = require('path');
var router = express.Router();

router.get('/review', function (req, res) {
    console.log(req.query);

    let errors = [];

    if (req.query.errors instanceof Array) {
        errors = req.query.errors;
    } else {
        errors = [req.query.errors];
    }

    const params = req.query;
    delete params.errors;

    console.log("Entering render phase");
    console.log(errors);
    console.log(params);

    res.render('index.ejs', { title: 'Review', errors, params })
});

/* POST book review form */
router.post('/review', function (req, res, next) {
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

    let bookName = `${params.email}_${params.book}`;
    let bookReviewPath = path.join(__dirname, '../data', bookName);

    fs.writeFileSync(bookReviewPath, JSON.stringify(params));

    res.render('bookReview', params);
});

/* GET book review */
router.get('/review/:email/:livro', function (req, res, next) {
    const bookName = `${req.params.email}_${req.params.livro}`;
    const bookReviewPath = path.join(__dirname, '../data', bookName);

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
    const bookReviewsPath = path.join(__dirname, '../data');

    fs.readdirSync(bookReviewsPath).forEach(file => {
        const bookReviewPath = path.join(bookReviewsPath, file);

        try {
            const bookReviewJSON = fs.readFileSync(bookReviewPath, 'utf8');
            let review = JSON.parse(bookReviewJSON);
            reviews.push(review);
        } catch (e) {
        }
    });

    res.status(200).render('bookTable', { reviews: reviews });
});

module.exports = router;
