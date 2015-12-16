/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var twitter = require("twitter");
var callbackUrl = "http://test.scriptr.io";

//tokens are optional params
var consumerKey = request.parameters["consumerKey"];
var consumerSecret = request.parameters["consumerSecret"];

var credentials = {
	"consumerKey": "pnB82bHGXC0GPBOvGPGDwvxkc",
	"consumerSecret": "ESUrwOXn8actHJtymKn5cBd5P9cu7fmTrAk5Yq4dABxWED5Dpj"
};

var requestToken = "d_nn4AAAAAAAdpyhAAABUal5sEA";
var requestSecret = "DjXVQniB7DXK1q2XDoQyHKgOBRmh5h8D";

var oAuthVerifier = "ljUN6evx5HUj8l9lbT7q4DIZ9zVoxmN1";

return twitter.getAccessToken(requestToken, requestSecret, oAuthVerifier, credentials); 				   				   				   				   										