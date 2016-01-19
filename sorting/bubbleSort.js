function bubbleSort(arr) {
  var stillBeingSorted = true;
  var length = arr.length;
  while(stillBeingSorted) {
    stillBeingSorted = false;
    for(var i = 0; i < length; i++) {
      counter++;
      if(arr[i] > arr[i+1]) {
        var temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        stillBeingSorted = true;
      }
    }
    length--;
  }
  return arr;
}

var arr = [5,6,4,3,1,8];
bubbleSort(arr);
