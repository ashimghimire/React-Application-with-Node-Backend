var createError = require('http-errors');

var isAuthenticated = function(options) {
	return function (req, res, next) {
	if(req.isAuthenticated()) next();
	else res.redirect("/admin/logout");
	}

}

module.exports={
	isAuthenticated
}