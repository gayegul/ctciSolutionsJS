function searchRotatedArray(arr, num) {
  if(!arr || (arr.length === 1 && num !== arr[0])) return;
  var index = 0;
  if(arr.length === 1 && num === arr[0]) return index;
  var arr1 = arr.slice(0, Math.floor(arr.length / 2));
  var arr2 = arr.slice(Math.floor(arr.length / 2));

  var len = arr1.length;
  if(num === arr1[0]) return index;
  else if(num === arr1[len]) return index += index + len - 1;
  else if(num === arr2[0]) return index += len - 1;

  else if((arr1[0] > arr1[len - 1] && num >= arr1[0]) || (arr1[0] < arr1[len - 1] && num <= arr1[len - 1])) {
    index += searchRotatedArray(arr1, num);
  }
  else {
    index += len;
    index += searchRotatedArray(arr2, num);
  }
  return index;
}

var arr = [15, 16, 18, 19, 20, 1, 3, 4, 5, 7, 8, 10];
var arr2 = [2,2,2,2,4,2];
searchRotatedArray(arr2, 4);
