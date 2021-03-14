module.exports = function repeater(str, options) {
  if (!(options.addition === undefined)) str += String(options.addition);

  if (isFinite(options.additionRepeatTimes) || options.additionRepeatTimes%1 || options.additionRepeatTimes>0) {
    str += (options.additionSeparator) ? 
      (options.additionSeparator + options.addition).repeat(options.additionRepeatTimes-1) : 
      ('|' + options.addition).repeat(options.additionRepeatTimes-1);
  }

  let finalString = str;

  if (isFinite(options.repeatTimes) || options.repeatTimes%1 || options.repeatTimes>0) {
    finalString += (options.separator) ? 
      (options.separator + str).repeat(options.repeatTimes-1) : 
      ('+' + str).repeat(options.repeatTimes-1);
  }

  return finalString;
};