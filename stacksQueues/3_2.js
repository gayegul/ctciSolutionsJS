//Solution with a queue implementation using Linked Lists
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
  if(data === undefined) return null;
  this.length++;
  var node = new Node(data);
  if(!this.head) this.head = node;
  else this.tail.next = node;
  this.tail = node;
  return this.length;
};

LinkedList.prototype.pop = function() {
  if(!this.tail) return null;
  this.length--;
  var current = this.head;
  if(this.tail === this.head) {
    var data = this.tail.data;
    this.head = null;
    this.tail = null;
    return data;
  } else {
    var lastBeforeTail = current;
    while(current.next) {
      lastBeforeTail = current;
      current = current.next;
    }
    lastBeforeTail.next = null;
    this.tail = lastBeforeTail;
  }
  return current.data;
};

var Stack = function() {
  this.min = new LinkedList();
  this.stack = new LinkedList();
};

Stack.prototype.push = function(data) {
  if(!data) return null;
  if(!this.stack.length) this.min.append(data);
  else {
    if(data < this.min.tail.data) this.min.append(data);
  }
  this.stack.append(data);
};

Stack.prototype.pop = function() {
  if(!this.stack.length) return null;
  else {
    var popped = this.stack.pop();
    if(popped === this.min.tail.data) this.min.pop();
  }
};

Stack.prototype.minimum = function() {
  if(!this.min.length) return null;
  return this.min.tail.data;
};
