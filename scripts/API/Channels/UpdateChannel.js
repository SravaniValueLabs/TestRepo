/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var pubsub=require("pubsub");
var channel="News";
var message = {"subscribeACL":"authenticated","publishACL":"anonymous"};
return pubsub.updateChannel(channel,message);

//var message = ["subscribeACL":"anonymous","publishACL":"anonymous"];			