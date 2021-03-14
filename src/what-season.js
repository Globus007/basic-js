module.exports = function getSeason(date) {
  if(!date) return "Unable to determine the time of year!";
  if ( Object.prototype.toString.call(date) !== '[object Date]' ) throw new Error("wrong tricky data");
  switch(date.getMonth()) {
    case 11:
    case 0:
    case 1: return "winter";
    case 2:
    case 3:
    case 4: return "spring";
    case 5:
    case 6:
    case 7: return "summer";    
    default: return "autumn";
    }
};
