function sortAnagrams(arr) {
  if(!arr || arr.length < 3) return arr;
  var result = [];
  var sorted = {};
  for(var i = 0; i < arr.length; i++) {
    var key = sortWord(arr[i]);
    if(sorted[key]) sorted[key].push(arr[i]);
    else sorted[key] = [arr[i]];
  }
  for(var prop in sorted) {
    result = result.concat(sorted[prop]);
  }
  return result;
}

function sortWord(str) {
  var divided = str.split('');
  for(var i = 0; i < str.length - 1; i++) {
    for(var j = i + 1; j < str.length; j++) {
      if(divided[j].charCodeAt(0) < divided[i].charCodeAt(0)) {
        var temp = divided[j];
        divided[j] = divided[i];
        divided[i] = temp;
        j = str.length - 1;
      }
    }
  }
  return divided.join('');
}
