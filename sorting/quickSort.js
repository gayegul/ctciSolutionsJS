function doPartition(arr) {
  var len = arr.length;
  if(!arr || !len || len === 1) return arr;
  var pivot = arr.pop();
  var i = 0;
  for(var j = 0; j < len; j++) {
    if(arr[j] < pivot) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
  }
  var smaller = doPartition(arr.slice(0, i));
  var bigger = doPartition(arr.slice(i, len));
  smaller.push(pivot);
  return smaller.concat(bigger);
}

var arr = [3,7,8,5,2,1,9,6,4];
doPartition(arr);
