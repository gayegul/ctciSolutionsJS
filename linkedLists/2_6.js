function isPalindrome(list) {
  var letters = {};
  var current = list.head;
  var index = 0;
  while(current) {
    letters[index] = current.data;
    index++;
    current = current.next;
  }
  var length = Object.keys(letters).length;
  for(var i = 0; i < Math.floor(length / 2); i++) {
    if(letters[i] !== letters[length - 1 - i]) return false;
  }
  return true;
}
