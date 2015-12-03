/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var mpush=require("mobile-push");
var pushTokens = ["eNN8LT1W8w8:APA91bGBArTuZYSiHOx5Ip3FeIBCtp_lzAacjBubopV4li91B1iNmKLJi6rlmkfX-t5gNaTyxyVyxeEjmPNf7JE5OQYYVpVuB20APA3qkjzBazCNc1meA0D9E9-52Cz6we77j8Gy32ql"];
                  
 //"ewOt4rKcBqo:APA91bFjVPXfT39QRrQ0Jz83lSDqYopnmtCn615Ne08Th9eyVFAPTCMb2SxUWoQIzGPKjPTq0n3ugS6i3V1PwPTAQl344Bo89b-_S252wVn_Z6JxFtxnU2Gk6n-AWGTxdxMu3ZCcODEU"];
//var pushTokens = ["1234"];
return mpush.addToGroup("Android_Group", pushTokens);sff
			