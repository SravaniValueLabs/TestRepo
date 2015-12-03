/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var mpush=require("mobile-push");
return mpush.updateGroup("AndroidAPI_Group", "android");
//return mpush.updateGroup("Delete", "android");			