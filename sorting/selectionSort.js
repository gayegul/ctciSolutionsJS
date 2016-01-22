function selectionSort(arr) {
  if(!arr.length || arr.length === 1) return arr;
  var index;
  for(var i = 0; i < arr.length - 1; i++) {
    var smallest = arr[i];
    index = i;
    for(var j = i + 1; j < arr.length; j++) {
      if(arr[j] < smallest) {
        smallest = arr[j];
        index = j;
      }
    }
    arr[index] = arr[i];
    arr[i] = smallest;
  }
  return arr;
}
