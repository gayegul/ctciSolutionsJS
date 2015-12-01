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

LinkedList.prototype.insert = function(data, position) {
  this.length++;
  var node = new Node(data);
  if(!this.head) {
    this.head = node;
    this.tail = node;
  }
  else if(position <= 0) {
    node.next = this.head;
    this.head = node;
  }
  else {
    if(position === this.length - 1) {
      this.tail.next = node;
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
      current.next = node;
    }
  }
  return this.toArray();
};

LinkedList.prototype.delete = function(position) {
  if(position < 0 || position > this.length - 1 || this.length === 0) return false;
  this.length--;
  var current = this.head;
  var counter = 0;
  if(current.next) {
    if(position === 0) {
      this.head = current.next;
    } else {
      while(counter < position) {
        counter++;
        if(counter === position && current.next.next) {
          current.next = current.next.next;
        } else {
          current.next = null;
        }
      }
    }
  }
  else {
    this.head = null;
    this.tail = null;
  }
  return this.toArray();
};

LinkedList.prototype.get = function(position) {
  if(isNaN(position)) return this.toArray();
  else {
    if(!this.head) return null;
    else {
      if(position === 0) return this.head.data;
      else if(position === this.length - 1) return this.tail.data;
      else if(position > this.length - 1 || position < 0) return null;
      else {
        var current = this.head;
        var counter = 0;
        while(counter < position) {
          counter++;
          current = current.next;
        }
        return current.data;
      }
    }
  }
};

LinkedList.prototype.pop = function() {
  if(!this.tail) return null;
  else {
    var current = this.head;
    if(this.tail === this.head) {
      this.head.next = null;
      this.tail =null;
      return this.data;
    } else {
      if(this.tail) {
        var lastBeforeTail = current;
        while(current.next) {
          lastBeforeTail = current;
          current = current.next;
        }
        lastBeforeTail.next = null;
        this.tail = lastBeforeTail;
      }
    }
    return current.data;
  }
};

LinkedList.prototype.toArray = function() {
  var resultArray = [];
  var current = this.head;
  if(!this.head) return [];
  while(current.next) {
    resultArray.push(current.data);
    current = current.next;
  }
  resultArray.push(current.data);
  return resultArray;
};

LinkedList.prototype.toString = function() {
  var resultString = '';
  var current = this.head;
  while(current.next) {
    resultString += current.data + ', ';
    current = current.next;
  }
  resultString += current.data;
  return resultString;
};

LinkedList.prototype.getLength = function() {
  return this.length;
};

//pop (remove and return the tail), shift (remove and return the head)
