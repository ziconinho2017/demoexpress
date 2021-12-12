const productController = require('../controllers/productController')
const express = require('express')
const router = express.Router();
router.get('/addproduct',productController.addproduct);
router.post('/add',productController.save)
router.get('/getAll',productController.getAll)
router.get('/deleteproduct/:prodId',productController.deleteProductById)
module.exports = router;