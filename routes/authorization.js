//determine what the identity is permitted to access
var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
	var currentId = req.session.id;
	
		req.session.pems = getPermissions(currentId);
  if(req.session.pems){
			console.log('permitted ', req.session.pems);
			next();//continue to resolve the route 
  }else{
		console.log('Identity verified but no permitted access');
		//at this point you could try redirecting to the token server or just return to the requestor and 
		return res.status(401).send('Identity verified but no permitted access');
	}
});

function getPermissions(identity){
	//this is where an authorization service like LDAP group memebership could be leveraged
  
  //the following are of course an example to illistate what that authorization would return 
	if(identity=='Neo')
		return ['Matrix','Zion'];
	else if(identity=='Trinity')
		return ['Matrix','Zion'];
	else if (identity == 'Morpheus')
		return ['Matrix','Zion','Zion_Mainframe'];
	else if (identity == 'Agent_Smith')
		return ['Matrix'];
	else
		return;
}

module.exports = router;