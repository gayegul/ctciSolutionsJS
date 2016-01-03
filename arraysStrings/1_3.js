//O(n)
function replaceSpace(str) {
  var arr = str.split('');
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].charAt(0) === ' ') arr[i] = '%20';
  }
  return arr.join('');
}
