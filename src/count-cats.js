module.exports = function countCats(matrix) {
  return matrix.flat().filter( cat => cat === "^^" ).length;
};
