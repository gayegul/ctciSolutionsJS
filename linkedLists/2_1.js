var LinkedList = function() {
  this.length = 0;
  this.head = null;
  this.tail = null;
};

var Node = function(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
};

LinkedList.prototype.insert = function(data, position) {
  this.length++;
  var node = new Node(data);
  if(!this.head) {
    this.head = node;
    this.tail = node;
  }
  else if(position <= 0 || position === undefined) {
    node.next = this.head;
    this.head = node;
  }
  else {
    if(position === this.length - 1) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    else {
      var current = this.head;
      var counter = 0;
      while(counter < (position - 1) && current.next) {
        current = current.next;
        counter++;
      }
      node.next = current.next;
      current.next.prev = node;
      current.next = node;
      node.prev = current;
    }
  }
  return this.toArray();
};

LinkedList.prototype.removeDuplicate = function() {
  if(!this.length) return null;
  else if(this.length === 1) return this.toArray();
  var current = this.head;
  var nodes = {};
  for(var i = 0; i < this.length; i++) {
    if(!nodes[current.data]) {
      nodes[current.data] = true;
    } else {
      this.length--;
      if(current.next) {
        current.prev.next = current.next;
        current.next.prev = current.prev;
      } else {
        current.prev.next = null;
      }
    }
    current = current.next;
  }
  return this.toArray();
};

LinkedList.prototype.toArray = function() {
  var resultArray = [];
  var current = this.head;
  if(!this.head) return resultArray;
  while(current.next) {
    resultArray.push(current.data);
    current = current.next;
  }
  resultArray.push(current.data);
  return resultArray;
};
