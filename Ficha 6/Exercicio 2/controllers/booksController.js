var querystring = require('querystring');
var fs = require('fs');
var path = require('path');
var Book = require('../models/Book');

var booksController = {};

var reviewsDir = 'data';
var reviewsPath = path.join(__dirname, '..', 'public', reviewsDir);

booksController.listReviews = function (req, res) {
    Book.find().exec(function (err, books) {
        if (err) {
            console.log("Error: ", err);
        } else {
            res.render('bookTable', { reviews: books });
        }
    })
}

booksController.publishReview = function (req, res) {
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
        params.imagePath = `/${reviewsDir}/${req.file.filename}`;
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

    var book = new Book(req.body);
    console.log(req.file.filename);
    book.imagePath = `/${reviewsDir}/${req.file.filename}`;
    book._id = reviewID;

    Book.deleteOne({ _id: reviewID }).then(
        book.save((err) => {
            if (err) {
                console.log('Error: ', err);
                res.render('/books/review');
            } else {
                console.log('Book saved: ', book);
                res.render('bookReview', params);
            }
        }))
}

booksController.missingReviewFields = function (req, res) {
    let errors = [];

    if (req.query.errors instanceof Array) {
        errors = req.query.errors;
    } else {
        errors = [req.query.errors];
    }

    const params = req.query;
    delete params.errors;

    res.render('index.ejs', { title: 'Review', errors, params })
}

booksController.review = function (req, res) {
    const reviewID = `${req.params.email}_${req.params.livro}`;

    Book.findOne({ _id: reviewID }).exec(function (err, review) {
        if (err) {
            console.log("Error: ", err);
        } else {
            if (review) {
                let params = {
                    ...review._doc,
                    title: "Book review"
                }
                console.log(params);
                res.render('bookReview', params);
            } else {
                res.redirect('/books/reviews');
            }
        }
    })

}

booksController.getImageName = function (req, file) {
    const reviewID = `${req.body.email}_${req.body.book}`;
    const imageExtension = path.extname(file.originalname);
    const imageName = reviewID + imageExtension;
    return imageName;
}

module.exports = booksController;