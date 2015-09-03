//Determine the identity of the connection 
var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
	var token = req.query['identity-token'];
	if(token){
		console.log('Token Present');
		req.session = {};//Recommend reading about session implemenation in node middleware 
		req.session.id = validateToken(token);
		if(req.session.id){
			console.log('Identity set to ', req.session.id);
			next();//continue to resolve the route 
		}else
			return res.status(403).send('Invalid Token provided.');
	}else{
		console.log('No Token');
		//at this point you could try redirecting to the token server or just return to the requestor and 
		return res.status(403).send('A Token must be submitted.');
	}
});

function validateToken(token){
	//this is where a token server would be called and if the token valid return the identity of the user
	if(token==1)
		return 'Neo';
	else if(token==2)
		return 'Trinity';
	else if (token == 3)
		return 'Morpheus';
	else if (token == 4)
		return 'Agent_Smith';
	else if (token == 5)
		return 'Random_User';
	else
		return;
}

module.exports = router;