const express = require('express');
var router = express.Router();
var productController = require('../controllers/productController.js');

router.param('productId', productController.getByIdProduct);

router.get('/product', productController.getAllProducts);
router.post('/product', productController.createProduct);

router.get('/product/:productId', productController.getOneProduct);
router.put('/product/:productId', productController.updateProduct);
router.delete('/product/:productId', productController.deleteProduct);


module.exports = router;