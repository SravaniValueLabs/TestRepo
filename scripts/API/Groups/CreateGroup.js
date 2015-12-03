/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var mpush=require("mobile-push");
return mpush.createGroup("API_Group" ,"iOS" ,"iosprod");			