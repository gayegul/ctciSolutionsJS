function compress(str) {
  var currentLetter = str.charAt(0);
  var counter = 0;
  var result = '';
  for(var i = 0; i < str.length; i++) {
    if(currentLetter === str.charAt(i)) counter++;
    else if(currentLetter !== str.charAt(i)) {
      result += currentLetter + counter;
      currentLetter = str.charAt(i);
      counter = 1;
    }
    if(!str[i+1]) result += currentLetter + counter;
  }
  return str.length === result.length ? str : result;
}
