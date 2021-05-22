const express = require('express');
var router = express.Router();
var productController = require('../controllers/productController.js');
var authController = require('../controllers/authController');

router.param('productId', productController.getByIdProduct);

router.get('/products', productController.getAllProducts);
router.post('/product', productController.createProduct);

router.get('/product/:productId', productController.getOneProduct);
router.put('/product/:productId', productController.updateProduct);
router.delete('/product/:productId', authController.verifyToken, authController.verifyRoleAdmin, productController.deleteProduct);

module.exports = router;