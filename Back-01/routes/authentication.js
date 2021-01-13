var createError = require('http-errors');

var njwt = require('njwt');

var isAuthenticated = function(req, res, next) {
	njwt.verify(req.headers.token,"helpme",function(err,verifiedJwt){
		if(err){
			res.status(401).send(createError(401))
		}else{
			next();
		}
		});	
}

module.exports = {
	isAuthenticated
}