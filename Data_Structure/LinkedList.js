class LinkedList {
  constructor(...values) {
    // variable's which can't be accessed by user
    function node(data) {
      this.data = data;
      this.next = null;
    }

    // Object properties
    this.head = null;
    this.tail = null;

    //--------------------------------------------------------------------
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

    //--------------------------------------------------------------------
    this.delete = (...values) => {
      for (let data of values) {
        var cur = this.head,
          prev = null;

        if (this.head === null || this.head.next === null) {
          this.head = null;
        } else {
          while (cur.data !== data && cur.next) {
            prev = cur;
            cur = cur.next;
          }
          // operation after finding value in linked list
          if (data === cur.data) {
            //updating head
            if (cur === this.head) {
              this.head = cur.next;
            } else {
              prev.next = cur.next;
              // updating tail
              if (cur === this.tail) {
                this.tail = prev;
              }
            }
          } else {
            console.log(data + " not found!!");
          }
        }
      }
    };

    //--------------------------------------------------------------------
    this.reverse = () => {
      let nxt = this.head,
        prev = null;

      if (this.head) {
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

    //--------------------------------------------------------------------
    this.print = () => {
      for (let i = this.head; i; i = i.next) {
        console.log(i.data);
      }
    };

    //------------------------------- Getting array of list -------------------------------
    this.getList = () => {
      let arr = [];
      for (let i = this.head; i; i = i.next) {
        arr.push(i.data);
      }

      return arr;
    };
  }
}

export default LinkedList;
//---------------------------------- Test ----------------------------------

// let l = new LinkedList(10, 20);
// l.delete(20);
// l.add(20, 30, 40, 50, 60);
// l.delete(10, 60, 40, 100);
// l.reverse();
// console.log(l.getList());