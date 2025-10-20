var express = require('express'); //imports the express library
var router = express.Router(); //creates a router object which acts as a mini web server
const ctrlMain = require('../controllers/main'); //impoprts a controller - a seperate js object that holds the logic for what happens when (like a handler)

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
