module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = turnsCount(disksNumber);
  return {turns, seconds: Math.floor( turns * 3600/turnsSpeed )};
}

function turnsCount(disksNumber) {
  return (disksNumber === 2) ? 3 : turnsCount(disksNumber - 1) * 2 + 1;
}