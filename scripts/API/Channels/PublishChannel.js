/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var pubsub=require("pubsub");
//var message = '{"Content":"Hello!"}';  
//return pubsub.publish("GeneralAwareness", "hey");
//return pubsub.publish("Beauty", "hey");
//return pubsub.publish("News", "hey");
//return pubsub.publish("Food", "hey");
return pubsub.publish("Fashion", "hey");			