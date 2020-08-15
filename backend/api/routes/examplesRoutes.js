const express = require("express");
const exampleCtrl =  require('../controllers/examplesController');
const auth = require('../controllers/authController');
const router = express.Router()

// Example Routes

// Get all examples
router.get('/', exampleCtrl.list_examples);


// Create new example
// ** Must be authenticated to access this route. **
router.post('/', auth.ctrl.required, exampleCtrl.create_an_example);

module.exports = router;
