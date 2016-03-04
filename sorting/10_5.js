function sparseSearch(arr, str) {
  if(!arr) return false;
  var left = 0;
  var right = arr.length - 1;
  while(!arr[right].length || !arr[left].length) {
    while(!arr[right].length) right--;
    while(!arr[left].length) left++;
  }
  var mid = Math.floor((left + right) / 2);
  while(true) {
    if(arr[mid] === '') {
      while(arr[mid] === '') {
        mid++;
        if(mid > right) {
          mid = Math.floor((left + right) / 2);
          while(arr[mid] === '') {
            mid--;
          }
        }
      }
    }
    if(str === arr[mid]) return mid;
    else if(mid === left) return -1;
    else if(arr[mid] > str) right = mid;
    if(mid === right) right = Math.floor((left + right) / 2);
    else left = mid;
    mid = Math.floor((left + right) / 2);
  }
}
var arr = ['', 'at', '', '', '', 'car', '', '', 'dive', '', ''];
sparseSearch(arr, 'at');
