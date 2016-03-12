//Iteratively
function printLinkedList(tree) {
  if(!tree.root) return null;
  var queueMain = [tree.root];
  var queueChildren = [];
  var result = [];
  var tempResult = [];
  while(true) {
    while(queueMain.length) {
      var popped = queueMain.shift();
      //create a linked list out of the tree nodes using a next pointer
      if(tempResult.length) tempResult[tempResult.length - 1].next = popped;
      tempResult.push(popped);
      if(popped.left) queueChildren.push(popped.left);
      if(popped.right) queueChildren.push(popped.right);
    }
    //push the head of the linked list which holds the entire list
    result.push(tempResult[0]);
    tempResult = [];
    queueMain = queueChildren;
    if(!queueMain.length) return result;
    queueChildren = [];
  }
}
