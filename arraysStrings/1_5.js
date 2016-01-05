function isOneStepAway(str1, str2) {
  var counter = 0;
  var index = 0;
  if(str1.length - str2.length >= 2) return false;
  else if(str1.length === str2.length) {
    for(var i = 0; i < str1.length; i++) {
      if(str1[i] !== str2[index]) {
        counter++;
        if(str1.length > str2.length) index--;
        if(counter > 1) return false;
      }
      index++;
    }
  }
  return true;
}
