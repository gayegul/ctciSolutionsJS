function findIndex(listy, x) {
  if(x < 0 || !listy.length) return;

  var len = findLength(listy);
  var left = 0;
  var right = len - 1;
  var result;

  while(true) {
    var mid = Math.floor((left + right) / 2);
    if(listy[mid] === x) return mid;
    else if(right === mid) return false;
    else if(listy[mid] < x) left = mid + 1;
    else right = mid;
  }
}

function findLength(arr) {
  var index = 0;
  while(true) {
    if(!index) index += 2;
    if(arr[index]) {
      index *= 2;
    } else {
      while(!arr[index]) {
        index--;
        if(arr[index]) return index + 1;
      }
    }
  }
}

var arr = [5,7,9,12,13,14];
findIndex(arr, 7);
