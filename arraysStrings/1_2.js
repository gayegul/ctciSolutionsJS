//O(n)
function isPermutation(str1, str2) {
    if(str2 === undefined || str1.length !== str2.length) return false;
    var letters = {};
    var length = str1.length;
    for(var i = 0; i < length; i++) {
      if(letters[str1[i]]) letters[str1[i]]++;
      else letters[str1[i]] = 1;
    }
    for(var j = 0; j < length; j++) {
      if(letters[str2[j]] && letters[str2[j]] > 0) letters[str2[j]]--;
      else return false;
    }
    return true;
}
