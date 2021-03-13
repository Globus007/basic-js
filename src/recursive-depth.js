const { prepareStackTrace } = require("../extensions/custom-error");
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let nestedArrs = arr.filter(el => Array.isArray(el));

    if (!nestedArrs) return 1;

    let maxDepth = 0;
    let depth;
    for( let i=0; i<nestedArrs.length ; i++) {
      depth = this.calculateDepth(nestedArrs[i]);
      maxDepth = (depth > maxDepth) ? depth : maxDepth;
    }
    
    return maxDepth + 1;
  }

};