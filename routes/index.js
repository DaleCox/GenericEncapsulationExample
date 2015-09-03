var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Encapsulation Example', identity:req.session.id, pems:req.session.pems});
});

module.exports = router;
