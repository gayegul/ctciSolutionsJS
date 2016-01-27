function merge(arr1, arr2) {
  var len = arr1.length + arr2.length;
  var firstIndex = arr1.length - 1;
  var secondIndex = arr2.length - 1;

  for(var i = len - 1; i >= 0; i--) {
    if(firstIndex >= 0 && secondIndex >= 0) {
      arr1[i] = arr1[firstIndex] > arr2[secondIndex] ? arr1[firstIndex--] : arr2[secondIndex--];
    }
    else if(firstIndex >= 0) arr1[i] = arr1[firstIndex--];
    else arr1[i] = arr2[secondIndex--];
  }
  return arr1;
}
