var mongoose = require('mongoose');
var Product = require('../models/product');
mongoose.set('useFindAndModify', false);

var productController = {};

productController.createProduct = function (req, res, next) {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity
    });

    product.save((err) => {
        if (err) {
            next(err);
        } else {
            res.json(product);
        }
    })
}

productController.updateProduct = function (req, res, next) {
    Product.findByIdAndUpdate(req.product, req.body, { new: true }, function (err, product) {
        if (err) {
            next(err);
        } else {
            res.json(product);
        }
    })
}

productController.deleteProduct = function (req, res, next) {
    Product.findByIdAndDelete({ _id: req.product._id }, (function (err, product) {
        if (err) {
            next(err);
        } else {
            res.json({ message: 'Ok' });
        }
    }))
};

productController.getAllProducts = function (req, res, next) {
    Product.find().exec(function (err, products) {
        if (err) {
            next(err);
        } else {
            res.send(products);
        }
    })
}

productController.getOneProduct = function (req, res) {
    res.json(req.product);
};

productController.getByIdProduct = function (req, res, next, id) {
    Product.findOne({ _id: id }, function (err, product) {
        if (err) {
            next(err);
        } else {
            req.product = product;
            next();
        }
    })
}

module.exports = productController;