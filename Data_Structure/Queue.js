// Importing Linked List from current folder using node import syntax
const LinkedList = require("./LinkedList");

//---------------------------------- Queue ----------------------------------
class Queue {
  constructor(...values) {
    let front = null,
      rear = null;

    // initializing linked list
    const q = new LinkedList(...values);

    this.enqueue = (...val) => {
      q.add(...val);
      front = q.head;
      rear = q.tail;
    };

    this.dequeue = () => {
      let shift = front?.data;
      if (front === null) {
        console.log("Queue is empty!!");
      } else {
        front = front.next;
      }
      q.head = front;
      return shift;
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
// q.dequeue();
// q.enqueue(70);
// console.log(q.getQueue());
