var LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

var Node = function(data) {
  this.data = data;
  this.next = null;
};

LinkedList.prototype.append = function(data) {
  this.length++;
  var node = new Node(data);
  if(!this.head) {
    this.head = node;
  }
  else {
    this.tail.next = node;
  }
  this.tail = node;
};

LinkedList.prototype.prepend = function(data) {
  this.length++;
  var node = new Node(data);
  if(!this.head) {
    this.tail = node;
  } else {
    node.next = this.head;
  }
  this.head = node;
};

//toArray, delete, toString, insert, getLength, get,
//pop (remove and return the tail), shift (remove and return the head)
