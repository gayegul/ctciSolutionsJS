//O(n)
function isPalindrome(str) {
  if(!str) return false;
  var arr = str.split(' ').join('').split('');
  var letters = {};
  for(var i = 0; i < arr.length; i++) {
    if(!letters[arr[i]]) letters[arr[i]] = 1;
    else letters[arr[i]]++;
    if(letters[arr[i]] % 2 === 0) delete letters[arr[i]];
  }
  if(Object.keys(letters).length > 1) return false;
  return true;
}
