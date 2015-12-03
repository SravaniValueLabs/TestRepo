/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var mpush=require("mobile-push");
var pushTokens=["1234"];
return mpush.removeFromGroup("AndroidAPI_Group", pushTokens);			