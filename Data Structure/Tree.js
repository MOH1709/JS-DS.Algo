class Tree {
  constructor() {
    function node(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }

    let root = null;

    // variables that can be accessed by user
    this.insert = (...values) => {
      for (let data of values) {
        var cur = root;

        if (cur === null) {
          root = new node(data);
        } else {
          while (cur) {
            var prev = cur;
            cur = cur[cur.data < data ? "right" : "left"];
          }
          prev[prev.data < data ? "right" : "left"] = new node(data);
        }
      }
    };

    this.rInsert = (data, cur = root) => {
      if (root === null) {
        root = new node(data);
        return;
      }

      if (cur.data < data) {
        if (cur.right) {
          this.rInsert(data, cur.right);
        } else {
          cur.right = new node(data);
        }
      } else {
        if (cur.left) {
          this.rInsert(data, cur.left);
        } else {
          cur.left = new node(data);
        }
      }
    };

    this.delete = (...values) => {
      if (root === null) {
        console.log("Tree is Empty");
        return;
      }

      for (let data of values) {
        while (cur && cur.data !== data) {
          var prev = cur;
          cur = cur[cur.data < data ? "right" : "left"];
        }
        if (cur) {
        } else {
          console.log(data + " not found!!");
        }
      }
    };

    this.inOrder = (cur = root) => {
      if (cur.left) {
        this.inOrder(cur.left);
      }

      console.log(cur.data);

      if (cur.right) {
        this.inOrder(cur.right);
      }
    };

    this.maxDepth = (cur = root) => {
      if (cur === null) {
        return 0;
      }

      return Math.max(
        this.maxDepth(cur.left) + 1,
        this.maxDepth(cur.right) + 1
      );
    };
  }
}

//---------------------------------- Test ----------------------------------
let tree = new Tree();
tree.insert(30, 20, 40, 10, 15, 35, 50);
// tree.rInsert(11);
// tree.rInsert(1);

console.log(tree.isFullTree());
// tree.inOrder();
