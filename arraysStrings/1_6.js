function compress(str) {
  var counter = 1;
  var currentLetter = str[0];
  var result = '';
  for(var i = 1; i <= str.length; i++) {
    if(currentLetter !== str[i]) {
      result += currentLetter + counter;
      currentLetter = str[i];
      counter = 1;
    } else counter++;
  }
  return result.length < str.length ? str : result;
}
