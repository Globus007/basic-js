module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  return members.filter(el => typeof el === "string")
                .map(el => el.trim().toUpperCase())
                .sort()
                .reduce((prev, val) => prev + val.charAt(0), "");
};
