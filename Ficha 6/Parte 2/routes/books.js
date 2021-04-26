var express = require('express');
var path = require('path');
var multer = require('multer');
var booksController = require("../controllers/booksController.js");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/data/')
    },
    filename: function (req, file, cb) {
        cb(null, booksController.getImageName(req, file));
    }
});

var data = multer({ storage: storage });

var router = express.Router();

/* GET book review page with missing fields alerts */
router.get('/review', booksController.missingReviewFields);

/* POST book review form */
router.post('/review', data.single('image'), booksController.publishReview);

/* GET book review */
router.get('/review/:email/:livro', booksController.review);

/* GET all book reviews */
router.get('/reviews', booksController.listReviews);

module.exports = router;
