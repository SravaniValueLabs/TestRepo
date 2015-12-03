/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var fb = require("facebook");

var callbackUrl = "http://www.scriptr.io/";

var oauthVerifier = "AQDJJN5aoILb4hXWC2Xn-zjhVY_K0_sHa5MOYE5sVejZ4A6wEzMk4eOFjhV2svPNC8BUxYY0HpYRT_Rm1q-_FFItUQ-EJ8w47KD0lxe_i8_1aZqphcAL3CLP3KI4Ky25jW3Kq08i_jasKo4b3Vuzi66IOg_5p25-JhErKWSxk40kS1wHeda4QhaT4z3UD3wCpMOt8_JEWD2j2zT4G2So-gPmjdv9xPyhEUO3ZEtRU6-BCCi5LO8vdRfqCIb55cUT8EQcXhssSsKh3akS0olxhf8h15nLNRk24e-3YkmqAIUbbI_JBW-2vNZqrgvI-6ruax-W-UhBAL0sc2daZE6SEHOe";

var credentials = {
  "apiKey": "341726685895718",
  "apiSecret": "62d55f6f76433f42c644ef2e9caf91bf"
};
return fb.getAccessToken(callbackUrl, oauthVerifier, credentials);   				   				   				   				   				   				   										