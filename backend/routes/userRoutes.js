const express = require('express');
const { registerUser, authUser, allUsers } = require('../controllers/userControllers');
const router = express.Router();

//route defined here is userd in service

router.route('/').post(registerUser);
router.post('/login',authUser);
router.get('/',allUsers);
module.exports = router;