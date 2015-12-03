/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var pubsub=require("pubsub");
return pubsub.subscribe("API", "DWW", "PUSH_GROUP");			