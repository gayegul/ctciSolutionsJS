function findNext(node) {
  if(!node || !node.parent && !node.right) return null;
  var next;
  if(node.parent === null) {
    if(node.right) {
      if(node.right.left) next = node.right.left;
      else next = node.right;
    }
  }
  else if(node.val <= node.parent.val) {
    if(node.right) {
      if(node.right.left) {
        var left = node.right.left;
        while(left.left) {
          left = left.left;
        }
        next = left;
      }
    }
    else next = node.parent;
  }
  else {
    if(node.right) next = node.right;
    else next = null;
  }
  return next;
}

//A more elegant solution
Node.prototype.getNext = function() {
	// This node was the last one
	// So, the next is the left-most leaf in this node's right subtree.
	if (this.right) {
		return this.right.getLeftMostLeaf();
	}
	// If there is no right-subtree, we ask parent to
	// find the next one after this node
	else if (this.parent) {
		return this.parent.continueTraverseFrom(this);
	}
	// There is no right-subtree and no parent.
	// This is the root and nowhere else to go.
	else {
		// FIN traversal
		return null;
	}
};

Node.prototype.continueTraverseFrom = function(lastNode) {
	if (this.left === lastNode) {
		// Left subtree just finished.
		// It's this node up next.
		return this;
	}
	else if (this.right === lastNode) {
		// Right subtree is done as well.
		// Ask parent to find the next node.
		if (this.parent) {
			return this.parent.continueTraverseFrom(this);
		}
		else {
			// No parent. This is the root.
			// End the traversal now.
			return null;
		}
	}
};

Node.prototype.getLeftMostLeaf = function() {
	if (this.left) {
		return this.left.getLeftMostLeaf();
	} else {
		return this;
	}
};
