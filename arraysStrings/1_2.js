//O(n)
function isPermutation(str1, str2) {
    if(str1.length !== str2.length || (!str1 && !str2)) return false;
    var letters = {};
    var length = str1.length;
    for(var i = 0; i < length; i++) {
      if(!letters[str1[i]]) letters[str1[i]] = 1;
      else letters[str1[i]]++;
      if(!letters[str2[i]]) letters[str2[i]] = -1;
      else letters[str2[i]]--;
      if(letters[str1[i]] === 0) delete letters[str1[i]];
      if(letters[str2[i]] === 0) delete letters[str2[i]];
    }
    if(Object.keys(letters).length) return false;
    return true;
}
