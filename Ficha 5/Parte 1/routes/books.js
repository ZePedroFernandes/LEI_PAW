var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

/* POST book review form */
router.post('/review', function (req, res, next) {
    console.log(req.body);
    let params = {
        title: 'Book Review',
        ...req.body
    };

    let bookName = `${params.email}_${params.book}`;

    let bookReviewPath = path.join(__dirname, '../data', bookName);

    fs.writeFileSync(bookReviewPath, JSON.stringify(params));

    res.status(200).render('bookReview', params);
});

/* GET book review */
router.get('/review/:email/:livro', function (req, res, next) {
    console.log(req.params.email);
    console.log(req.params.livro);

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
