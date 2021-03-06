/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var channel = request.parameters["channel"];
var message = "";
var wrapMessage = request.parameters["wrapMessage"];

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.publish(channel, message, wrapMessage);
log.debug(JSON.stringify(result));

return result;   							