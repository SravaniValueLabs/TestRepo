/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var t = require("twitter");

var credentials = {
	"consumerKey": "pnB82bHGXC0GPBOvGPGDwvxkc",
	"consumerSecret": "ESUrwOXn8actHJtymKn5cBd5P9cu7fmTrAk5Yq4dABxWED5Dpj",
	"accessToken": "3900093374-ZY8QQHIOG4enJwF2xW5mhv7Ndac2yQ79JrjM3Qq",
	"accessTokenSecret": "XOxzw97TxXIDhIlVjIh5U7i4FP4iFDSbtFnUV3hRNLHWM"
};

return t.getHomeTimeLine(credentials);   				   										