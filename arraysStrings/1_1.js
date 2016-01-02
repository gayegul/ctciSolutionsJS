//With a hashtable O(n)
function isUnique(str) {
  if(!str) return null;
  var seen = {};
  for(var i = 0; i < str.length; i++) {
    if(!seen[str[i]]) seen[str[i]] = true;
    else return false;
  }
  return true;
}

//Without a hashtable O(nlogn) due to sorting
function isUnique(str) {
  str = str.split('').sort();
  for(var i = 0; i < str.length; i++) {
    if(str[i] === str[i+1]) return false;
  }
  return true;
}
