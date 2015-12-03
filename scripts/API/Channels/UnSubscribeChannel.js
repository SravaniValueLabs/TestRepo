/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var pubsub=require("pubsub");
//pubsub.unsubscribe("Fashion","Zqkj", "PUSH_GROUP");
return pubsub.unsubscribe("Fashion", "DWW", "PUSH_GROUP");			