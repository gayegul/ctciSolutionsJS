var Queue = function() {
  this.length = 0;
  this.first = null;
  this.last = null;
};

var Node = function(data) {
  this.data = data;
  this.next = null;
};

Queue.prototype.add = function(item) {
  var node = new Node(item);
  if(!this.length) {
    this.first = node;
    this.last = node;
  } else {
    this.last.next = node;
    this.last = node;
  }
  this.length++;
};

Queue.prototype.remove = function() {
  if(!this.length) return null;
  else {
    this.first = this.first.next;
    this.length--;
  }
};

Queue.prototype.peek = function() {
  return this.last;
};

Queue.prototype.isEmpty = function() {
  if(!this.length) return true;
  else return false;
};
