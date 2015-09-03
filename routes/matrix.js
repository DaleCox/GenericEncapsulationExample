var express = require('express');
var router = express.Router();

/* Authorization filters in action. */
router.use(function(req, res, next) {
	if(req.session.pems.indexOf('Matrix') != -1)
  		next();
	else
		res.status(401).send('You took the wrong pill.');
});

router.get('/', function(req, res, next) {
		var returnString = 'Welcome to the Matrix ' + req.session.id;
		res.send(returnString);
});

module.exports = router;
