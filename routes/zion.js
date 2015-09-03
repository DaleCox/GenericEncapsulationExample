var express = require('express');
var router = express.Router();

/* Authorization filters in action. */
router.use(function(req, res, next) {
	if(req.session.pems.indexOf('Zion') != -1)
  		next();
	else
		res.status(401).send('You took the wrong pill.');
});

/* Shows Action filters in action. */
router.get('/', function(req, res, next) {
	if(req.session.id.indexOf('Neo') != -1)
		req.session.id = 'The_One';
	
	next();
},
	function(req, res, next) {
		var returnString = 'Welcome to Zion ' + req.session.id;
		res.send(returnString);
});

/* Authorization filters in action insdie a specified route. */
router.get('/mainframe', function(req, res, next) {
	if(req.session.pems.indexOf('Zion_Mainframe') != -1)
  		next();
	else
		res.status(401).send('You must be a Captain to have access to the mainframe');
},
function(req, res, next) {
	var returnString = 'Welcome to Zion mainframe ' + req.session.id;
	 res.send(returnString);
});

module.exports = router;
