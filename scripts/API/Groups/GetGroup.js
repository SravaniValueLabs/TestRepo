/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var mpush=require("mobile-push");
return mpush.getGroup("AndroidAPI_Group");			