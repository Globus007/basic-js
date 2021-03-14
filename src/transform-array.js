module.exports = function transform(array) {
  if ( !Array.isArray(array) ) throw new Error('Not array');
  let finalArr = [];
  let wasDeleted = false;
  for (let i=0; i<array.length; i++) {
      switch (array[i]) {
        case "--discard-prev": 
          if( wasDeleted ) {
            wasDeleted = false;
            break;
          }
          finalArr.pop();
          break;
        case "--double-prev" : 
          if( i === 0 || wasDeleted ) {
            wasDeleted = false;
            break;
          }
          finalArr.push(array[i-1]);
          break;
        case "--double-next" :
          if( i === array.length-1 ) {
            wasDeleted = false;
            break;
          }
          finalArr.push(array[i+1]);
          wasDeleted = false;
          break;
        case "--discard-next":
          i++;
          wasDeleted = true;
          break;
        default: 
        wasDeleted = false;
          finalArr.push(array[i]);
    }
  }
  return finalArr;
};