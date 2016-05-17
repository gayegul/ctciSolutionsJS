//O(n)
function replaceSpace(str) {
  if(!str) return;
  var arr = str.split('');
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === ' ') arr[i] = '%20';
  }
  return arr.join('');
}
