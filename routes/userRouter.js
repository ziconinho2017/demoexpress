const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router();
router.get('/adduser',userController.adduser)
router.post('/add',userController.save)
router.get('/getAll',userController.getall)
router.get('/deleteuser/:userId',userController.deleteById)
module.exports = router;