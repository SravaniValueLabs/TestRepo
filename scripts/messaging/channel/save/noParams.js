/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.channel.save();
log.debug(JSON.stringify(result));

return result;   							