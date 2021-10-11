const LinkedList = require("./LinkedList");

class Queue {
  constructor(...values) {
    let front = null,
      rear = null;

    const q = new LinkedList(...values);

    this.enqueue = (...val) => {
      q.add(...val);
      front = q.head;
      rear = q.tail;
    };

    this.dequeue = (count = 1) => {
      for (let i = 0; i < count; i++) {
        if (front === null) {
          console.log("Queue is empty!!");
          break;
        } else {
          front = front.next;
        }
      }
      q.head = front;
    };

    this.getQueue = () => {
      return q.getList(front);
    };
  }
}

module.exports = Queue;

//---------------------------------- Test ----------------------------------

// let q = new Queue(0, 1);
// q.enqueue(10, 20, 30, 40, 50, 60);
// q.dequeue(2);
// q.enqueue(70);
// console.log(q.getQueue());
