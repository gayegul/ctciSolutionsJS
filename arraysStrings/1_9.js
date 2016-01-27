function isRotation(str, subs) {
  var len = str.length;
  if(subs.length === len && len > 0) {
    newStr = str + str;
    return isSubstring(newStr, subs);
  }
  return false;
}

function isSubstring(str, subs) {
  for(var i = 0; i < str.length; i++) {
    if(checkSubstr(str, i, subs)) return true;
  }
  return false;
}

function checkSubstr(str, index, subs) {
  for(var i = 0; i + index < str.length && i < subs.length; i++) {
    if(subs.charAt(i) !== str.charAt(index + i)) return false;
  }
  return true;
}
