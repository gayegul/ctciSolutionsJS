//Graph implementation using arrays
var Graph = function() {
  this.nodeList = [];
};

var Node = function(val) { //Node aka vertex
  this.val = val;
  this.edges = [];
};

Graph.prototype.addNode = function(val) {
  if(!val) return;
  var node = new Node(val);
  this.nodeList.push(node);
};

Graph.prototype.addEdge = function(node1, node2) {
  if(!node1 || !node2 || !this.contains(node1) || !this.contains(node2)) return;
  node1.edges.push(node2);
};

Graph.prototype.removeNode = function(node) {
  if(this.contains(node)) {
    var index = this.nodeList.indexOf(node);
    this.nodeList.slice(index, 1);
  }
};

Graph.prototype.contains = function(node) {
  if(!node) return null;
  for(var i = 0; i < this.nodeList.length; i++) {
    if(this.nodeList[i] === node) return true;
  }
  return false;
};

Graph.prototype.hasEdge = function(node1, node2) {
  if(!node1 || !node2 || !this.contains(node1) || !this.contains(node2)) return;
  for(var i = 0; i < node1.edges.length; i++) {
    if(node1.edges[i] === node2) return true;
  }
  return false;
};

Graph.prototype.forEach = function(callback) {
  if(!callback) return;
  for(var i = 0; i < this.nodeList.length; i++) {
    callback(this.nodeList[i]);
  }
};
