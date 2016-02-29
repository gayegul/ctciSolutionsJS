var Queue = function() {
  this.first = null;
  this.last = null;
};

var Node = function(val) {
  this.val = val;
  this.next = null;
};

Queue.prototype.push = function(val) {
  if(!val) return null;
  var node = new Node(val);
  if(!this.first) this.first = node;
  else this.last.next = node;
  this.last = node;
};

Queue.prototype.pop = function() {
  if(!this.first) return null;
  var removed = this.first;
  if(this.first.next) {
    var nextFirst = this.first.next;
    this.first.next = null;
    this.first = nextFirst;
  }
  else {
    this.first = null;
    this.last = null;
  }
  return removed;
};

Queue.prototype.peek = function() {
  return this.last;
};

Queue.prototype.isEmpty = function() {
  return !this.last;
};
