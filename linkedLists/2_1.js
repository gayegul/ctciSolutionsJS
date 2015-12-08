//using a hashtable and a prev pointer in a singly-linked list
//0(n)

//invokes the removeDuplicate method
LinkedList.prototype.findResult = function() {
  if(!this.length) return null;
  else if(this.length === 1) return this;
  this.removeDuplicate();
  return this;
};

//main function to remove duplicates
LinkedList.prototype.removeDuplicate = function() {
  var nodes = {};
  var current = this.head;
  var prev = this.head;
  while(current.next) {
    if(!nodes[current.data]) {
      nodes[current.data] = true;
    } else {
      this.length--;
      prev.next = current.next;
    }
    prev = current;
    current = current.next;
  }
  if(nodes[current.data]) {
    prev.next = null;
    this.length--;
  }
  return this;
};
