function sortFile(arr) {
  if(arr.length < 2) return arr;
  var midLength = Math.floor(arr.length) / 2;
  var firstHalf = sortFile(arr.slice(0, midLength));
  var secondHalf = sortFile(arr.slice(midLength));
  return merge(firstHalf, secondHalf);
}

function merge(arr1, arr2) {
  var result = [];
  var index1 = 0;
  var index2 = 0;
  while(index1 < arr1.length && index2 < arr2.length) {
    if(arr1[index1] < arr2[index2]) {
      result.push(arr1[index1++]);
    }
    else if(arr1[index1] === arr2[index2]) {
      result.push(arr1[index1++]);
      result.push(arr2[index2++]);
    }
    else {
      result.push(arr2[index2++]);
    }
  }

  while(arr1[index1]) {
    result.push(arr1[index1++]);
  }
  while(arr2[index2]) {
    result.push(arr2[index2++]);
  }
  return result;
}
