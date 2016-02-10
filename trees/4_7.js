var Node = function(data) {
  this.data = data;
  this.dependencies = [];
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
    dependent.dependencies.push(dependency);
  }

  for(var k = 0; k < projects.length; k++) {
    var node = nodes[projects[k]];
    if(result.indexOf(node.data) !== -1) continue;
    else if(!node.dependencies.length) result.push(node.data);
    else {
      dfs(node, result);
    }
  }
  return result;
}

function dfs(node, result) {
  node.seen = true;
  for(var i = 0; i < node.dependencies.length; i++) {
    if(node.dependencies[i].seen) throw new Error('cycle');
    dfs(node.dependencies[i], result);
  }
  if(result.indexOf(node.data) === -1) result.push(node.data);
  node.seen = false;
}

var projects = ['a', 'b', 'c', 'd', 'e', 'f'];
var dependencies = [['a','f'],['b','f'],['c','d'],['d','a'],['d','b']];
buildOrder(projects, dependencies);
