class LinkedList {
  constructor(...values) {
    function node(data) {
      this.data = data;
      this.next = null;
    }

    this.head = null;
    this.tail = null;

    (this.add = (...val) => {
      for (let data of val) {
        if (this.head === null) {
          this.head = new node(data);
          this.tail = this.head;
        } else {
          this.tail.next = new node(data);
          this.tail = this.tail.next;
        }
      }
    })(...values);

    this.delete = () => {
      let cur = this.head,
        prev = this.head;

      if (this.head === null || this.head.next === null) {
        this.head = null;
        console.log("List is Empty!!");
      } else {
        while (cur.next) {
          prev = cur;
          cur = cur.next;
        }
        prev.next = null;
        this.tail = prev;
      }
    };

    this.reverse = () => {
      let nxt = this.head,
        prev = null;

      if (this.head === null) {
        console.log("List is Empty!!");
      } else {
        this.tail = this.head;

        while (nxt) {
          nxt = this.head.next;
          this.head.next = prev;
          prev = this.head;
          this.head = nxt;
        }

        this.head = prev;
      }
    };

    this.getList = (start = this.head) => {
      let arr = [];
      for (let i = start; i; i = i.next) {
        arr.push(i.data);
      }

      return arr;
    };
  }
}

module.exports = LinkedList;

//---------------------------------- Test ----------------------------------

// let l = new LinkedList(10, 20);
// l.delete();
// l.add(20, 30, 40, 50, 60);
// l.delete();
// l.reverse();
// console.log(l.getList());
