const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== "string") return false;
  if(isNaN(sampleActivity)) return false;
  if(sampleActivity <= 0 || sampleActivity >= 15) return false;
  return -Math.floor( HALF_LIFE_PERIOD * Math.log2( sampleActivity/MODERN_ACTIVITY ) );
};
