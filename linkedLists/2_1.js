//singly-linked list

//invokes removeDuplicate (and removeDuplicateNoHash) methods
LinkedList.prototype.findResult = function() {
  if(!this.length) return null;
  else if(this.length === 1) return this;
  this.removeDuplicate();
  return this;
};

//removes duplicates using a hashtable 0(n)
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

//removes duplicates without a hashtable 0(n2)
LinkedList.prototype.removeDuplicateNoHash = function() {
  var prev = this.head;
  var length = this.length;
  var current;
  for(var i = 0; i < length - 1; i++) {
    current = prev.next;
    while(current.next) {
      if(current.data === prev.data) {
        prev.next = current.next;
        this.length--;
      }
      current = current.next;
    }
    if(prev.data === current.data) {
      prev.next = null;
      this.length--;
    }
    prev = prev.next;
  }
  return this;
};
