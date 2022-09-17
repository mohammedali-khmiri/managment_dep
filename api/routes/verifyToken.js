const jwt = require("jsonwebtoken");

//if user authenticated
const verifyToken = (req, res, next) => {
	const authHeader = req.header("verified_token");
	if (authHeader) {
		const token = authHeader;
		jwt.verify(token, process.env.JWT_SEC, (err, user) => {
			if (err) res.status(403).json("Token is not valid!");
			req.user = user;
			next();
		});
	} else {
		return res.status(401).json("You are not authenticated!");
	}
};

//if user authenticated and authorization
const verifyTokenAndAuthorization = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			res.status(403).json("You are not allowed to do that!");
		}
	});
};

//if user authenticated and it's admin
const verifyTokenAndAdmin = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.isAdmin) {
			next();
		} else {
			res.status(403).json("You are not allowed to do that!");
		}
	});
};

module.exports = {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
};
