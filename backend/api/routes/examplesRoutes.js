const express = require("express");
const exampleCtrl =  require('../controllers/examplesController');
const auth = require('../controllers/authController');
const router = express.Router();

// Get All Examples
router.get('/', exampleCtrl.list_examples);

// Get All Examples by userId
router.get('/:userId', exampleCtrl.list_user_examples);

// Create New Example
// ** Must be Authenticated **
router.post('/', auth.ctrl.testGetToken, exampleCtrl.create_an_example);

module.exports = router;
