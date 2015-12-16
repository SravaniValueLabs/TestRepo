/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var currentDate = new Date();
var formattedDate = currentDate.getFullYear()
  + "-" + atLeastTwoDigits(currentDate.getMonth() + 1)
  + "-" + atLeastTwoDigits(currentDate.getDate())
  + "T" + atLeastTwoDigits(currentDate.getHours())
  + ":" + atLeastTwoDigits(currentDate.getMinutes())
  + ":" + atLeastTwoDigits(currentDate.getSeconds());
formattedDate += currentDate.getTimezoneOffset() < 0 ? "+" : "-";
formattedDate += atLeastTwoDigits((Math.abs(currentDate.getTimezoneOffset()) / 60)) + "00";

var credentials = {
  "apiKey": "341726685895718",
  "apiSecret": "62d55f6f76433f42c644ef2e9caf91bf",
  "accessToken": "CAAE2zHG5HCYBAGS7TaEvV3YZBSLZCPVkLJlZAE3tItgA82qKRafhwBU7NRjeaibLtYrXr0PdoN4zg0NsUxyHxUplsMZA2ZBKNfQAfg2ZCZC7279z4LQvl0hgoF2irSe8I7I526qrZByqyBGkoSZBi2v4E3psPUlZCIs8LZCn3N2LDRD9Wen9gdWK9qZBTgqPfN66YvwyYzFrFiZAF2AZDZD"
};

return facebookPost("This is a beautiful posting day, Holla Scriptr! " + formattedDate, credentials);

function atLeastTwoDigits (value) {
    return value < 10 ? "0" + value : value;
}   				   				   				   				   				   				   				   				   										