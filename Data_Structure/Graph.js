class Graph {
  constructor() {
    let map = new Map();

    this.addEdge = (nodeName, names = []) => {
      map.has(nodeName) || map.set(nodeName, []);

      for (let node of names) {
        map.get(nodeName).push(node);

        map.has(node) || map.set(node, []);
        if (node !== nodeName) map.get(node).push(nodeName);
      }
    };

    this.print = () => {
      let keysArr = map.keys();

      for (let key of keysArr) {
        console.log(key + " => " + map.get(key));
      }
    };
  }
}

//---------------------------------- Test ----------------------------------
let g1 = new Graph();
g1.addEdge("a", [1, 3, "b", "s"]);
g1.addEdge("b", [1, 3, "s", "b"]);
g1.print();
