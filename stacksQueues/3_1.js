function threeInOne(array1, array2, array3) {
  var result = [];
  var stack1 = new Stack();
  var stack2 = new Stack();
  var stack3 = new Stack();

  for(var i = 0; i < array1.length; i++) {
    stack1.push(array1[i]);
  }
  for(var j = 0; j < array2.length; j++) {
    stack2.push(array2[j]);
  }
  for(var k = 0; k < array3.length; k++) {
    stack3.push(array3[k]);
  }
  result.push(stack1);
  result.push(stack2);
  result.push(stack3);
  return result;
}
