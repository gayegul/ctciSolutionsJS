function findAncestor(root, node1, node2) {
  var result = null;
  if(node1 === root.val || node2 === root.val || !root) return result;
  else if((!root.left && !root.right) || !node1 || !node2) return result;
  else if(root.left.val === node1 || root.right.val === node1) return root.val;
  else if(root.left.val === node2 || root.right.val === node2) return root.val;
  else {
    var left1 = recurse(root.left, node1);
    var left2 = recurse(root.left, node2);
    var right1 = recurse(root.right, node1);
    var right2 = recurse(root.right, node2);

    if((left1 && right2) || (left2 && right1)) return root.val;
    else if(left1 && left2) result = findAncestor(root.left, node1, node2);
    else if(right1 && right2) result = findAncestor(root.right, node1, node2);
  }
  return result;
}

function recurse(root, node) {
  if(!root) return false;
  if(root.val === node) return true;
  if(recurse(root.left, node) || recurse(root.right, node)) return true;
}
