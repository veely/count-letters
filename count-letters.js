var countLetters = function(letters) {
  var obj = {};
  var noSpaces = letters.replace(/ /g, '').toLowerCase();
  for (i of noSpaces) {
    if (obj[i]) {
      obj[i] += 1;
    }
    else
    {
      obj[i] = 1;
    }
  }
  return obj;
};
console.log(countLetters('DAOIjaokdw'));