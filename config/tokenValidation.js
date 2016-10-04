
exports.tokenAuthentication = function (req, res, jwt, config) {
  var token = req.headers.authorization;
  if(token) {
    try {
      var decodedToken = jwt.decode(token, config.secret);
    } catch(e) {
      return false;
    }
  }
  
  if (!decodedToken) {
  	return false;
  } else {
  	return decodedToken;
  }
}
