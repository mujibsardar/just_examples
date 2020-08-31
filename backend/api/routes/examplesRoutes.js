const express = require("express");
const exampleCtrl =  require('../controllers/examplesController');
const auth = require('../controllers/authController');
const router = express.Router();

// Get All Examples
router.get('/', exampleCtrl.list_examples);

// Get All Examples by userId
router.get('/user-examples/:userId', exampleCtrl.list_user_examples);

// Get a specific example
router.get('/:exampleId', exampleCtrl.get_example);

// Create New Example
// ** Must be Authenticated **
router.post('/', auth.isAuthenticated, exampleCtrl.create_an_example);

// TODO - Delete all examples in the database
router.delete('/delete-all', exampleCtrl.delete_all);

module.exports = router;
