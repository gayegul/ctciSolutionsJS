// With a hashtable O(n) time complexity, O(1) space complexity
function isUnique(str) {
  if(!str || !str.length) return null;
  var seen = {};
  for(var i = 0; i < str.length; i++) {
    if(seen[str[i]]) return false;
    seen[str[i]] = true;
  }
  return true;
}
