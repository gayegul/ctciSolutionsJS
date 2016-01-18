function mergeSort(arr) {
  if(!arr || !arr.length || arr.length === 1) return arr;
  var halfLen = Math.floor(arr.length / 2);
  var firstHalf = mergeSort(arr.slice(0, halfLen));
  var secondHalf = mergeSort(arr.slice(halfLen));
  return sort(firstHalf, secondHalf);
}

function sort(arr1, arr2) {
   var result = [];
   var index1 = 0;
   var index2 = 0;
   while(index1 < arr1.length && index2 < arr2.length) {
     if(arr1[index1] < arr2[index2]) result.push(arr1[index1++]);
     else result.push(arr2[index2++]);
   }
   while(index1 < arr1.length) {
     result.push(arr1[index1++]);
   }
   while(index2 < arr2.length) {
     result.push(arr2[index2++]);
   }
   return result;
 }

var arr = [6,7,8,1,3,0,2,9];
mergeSort(arr);
