// Importing Linked List from current folder using node import syntax
import LinkedList from "./LinkedList.js";

//------------------------------- Queue using linked list -------------------------------
class Queue {
  constructor(...values) {
    let front = null,
      rear = null;

    // initializing linked list
    const list = new LinkedList();

    //--------------------------------------------------------------------
    (this.enqueue = (...val) => {
      list.add(...val);
      front = list.head;
      rear = list.tail;
    })(...values);

    //--------------------------------------------------------------------
    this.dequeue = () => {
      let shift = front && front.data;
      if (front) {
        front = front.next;
      }
      list.head = front;
      return shift;
    };

    //--------------------------------------------------------------------
    this.isEmpty = () => front === null;

    //--------------------------------------------------------------------
    this.print = () => {
      list.print();
    };

    //--------------------------------------------------------------------
    this.getQueue = () => {
      // returns a array of your queue
      return list.getList(front);
    };
  }
}

export default Queue;

//---------------------------------- Test ----------------------------------

// let q = new Queue(0, 1);
// q.enqueue(10, 20, 30, 40, 50, 60);
// q.dequeue();
// q.enqueue(70);
// q.print();
// console.log(q.getQueue());