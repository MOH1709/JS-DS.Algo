const Queue = require("./Queue");

class Graph {
  constructor() {
    let map = new Map();

    // Add undirected nodes in graph
    this.addEdge = (nodeName, names = []) => {
      map.has(nodeName) || map.set(nodeName, []);

      for (let node of names) {
        map.get(nodeName).push(node);

        map.has(node) || map.set(node, []);
        if (node !== nodeName) map.get(node).push(nodeName);
      }
    };

    // Breath first search
    this.BFS = (from) => {
      let isVisited = new Map();
      let q = new Queue(from);

      isVisited.set(from);
      while (q.isEmpty() === false) {
        var connArr = map.get(from);

        for (var node of connArr) {
          if (isVisited.has(node) === false) {
            isVisited.set(node);
            q.enqueue(node);
          }
        }
        from = q.dequeue();
        console.log(from);
      }
    };

    // Depth First Search
    this.DFS = (from) => {
      let isVisited = new Map();
      let stack = [from];

      isVisited.set(from);
      while (stack.length) {
        var cur = map.get(from).find((data) => !isVisited.has(data));

        if (cur === undefined) {
          console.log(stack.pop());
        } else {
          stack.push(cur);
          isVisited.set(cur);
          from = cur;
        }
      }
    };

    //print graph with all edge connections
    this.print = () => {
      let keysArr = map.keys();

      for (let key of keysArr) {
        console.log(key + " => " + map.get(key));
      }
    };
  }
}

//---------------------------------- Test ----------------------------------
// let g1 = new Graph();
// g1.addEdge("a", [1, 3, "b", "s"]);
// g1.addEdge("b", [1, 3, "s", "b"]);
// g1.DFS(1);
// g1.BFS(1);
