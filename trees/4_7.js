var Node = function(data) {
  this.data = data;
  this.next = [];
  this.parent = null;
};

function buildOrder(projects, dependencies) {
  var result = [];
  var nodes = {};
  for(var i = 0; i < projects.length; i++) {
    var node = new Node(projects[i]);
    nodes[projects[i]] = node;
  }

  for(var j = 0; j < dependencies.length; j++) {
    var dependent = nodes[dependencies[j][0]];
    var dependency = nodes[dependencies[j][1]];
    dependency.parent = dependent;
    dependent.next.push(dependency);
  }

  for(var pname in nodes) {
    var node = nodes[pname];
    if(result.indexOf(node.data) !== -1) continue;
    else if(!node.next.length) result.push(node.data);
    else {
      dfs(node, result);
    }
  }
  return result;
}

function dfs(node, result) {
  node.seen = true;
  for(var i = 0; i < node.next.length; i++) {
    if(node.next[i].seen) throw new Error('cycle');
    dfs(node.next[i], result);
  }
  if(result.indexOf(node.data) === -1) result.push(node.data);
  node.seen = false;
}

var projects = ['a', 'b', 'c', 'd', 'e', 'f'];
var dependencies = [['a','f'],['b','f'],['c','d'],['d','a'],['d','b']];
buildOrder(projects, dependencies);
