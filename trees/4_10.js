function findRoot(treeRoot, subRoot) {
  var resultLeft;
  var resultRight;
  if(!treeRoot || !subRoot) return null;
  else if(treeRoot.val === subRoot.val) return checkSubt(treeRoot, subRoot);
  else if(!treeRoot.left && !treeRoot.right) return false;
  else {
    if(treeRoot.left.val === subRoot.val) return checkSubt(treeRoot.left, subRoot);
    else if(treeRoot.right.val === subRoot.val) return checkSubt(treeRoot.right, subRoot);
    else {
      resultLeft = findRoot(treeRoot.left, subRoot);
      resultRight = findRoot(treeRoot.right, subRoot);
    }
  }
  return (resultLeft || resultRight);
}

function checkSubt(node, subRoot) {
  if(!node && !subRoot) return;
  if((!node && subRoot) || (node && !subRoot)) return false;
  if(node.val === subRoot.val) {
    if(!node.left && !node.right && !subRoot.left && !subRoot.right) return true;
    return (checkSubt(node.left, subRoot.left), checkSubt(node.right, subRoot.right));
  }
}
