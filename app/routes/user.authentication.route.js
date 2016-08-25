var router = require('express').Router();
var userController =  require('../controllers/userController');

router.post('/userSignUp',userController.userSignUp);
router.post('/userLogin',userController.userLogin);

module.exports = router;