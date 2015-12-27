//Iteratively
function treeToLinkedList(root) {
  var queue = [];
  var queueChildren = [];
  var result = [];
  var condition = true;
  if(!root) return null;
  result.push(root);
  if(!root.left) return result;
  else {
    queue.push(root.left);
    queue.push(root.right);
    result.push(queue);
    while(condition) {
      for(var i = 0; i < queue.length; i++) {
        if(!queue[i].left) condition = false;
        else queueChildren.push(queue[i].left);
        if(!queue[i].right) condition = false;
        else queueChildren.push(queue[i].right);
        queue[i].next = queue[i + 1];
      }
      result.push(queueChildren);
      queue = queueChildren;
      queueChildren = [];
    }
  }
  return result;
}

//TODO
//Recursively
