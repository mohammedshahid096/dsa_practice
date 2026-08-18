class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToLast(number) {
    let newNode = new ListNode(number);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let currentPointer = this.head;
    while (currentPointer.next !== null) {
      currentPointer = currentPointer.next;
    }
    currentPointer.next = newNode;
  }

  addToFirst(number) {
    let newNode = new ListNode(number);
    newNode.next = this.head;
    this.head = newNode;
  }

  display() {
    let currentNode = this.head;
    if (currentNode === null) {
      console.log(null);
      return;
    }

    let print = [];
    while (currentNode && currentNode.next !== null) {
      print.push(currentNode?.value);
      currentNode = currentNode.next;
    }
    print.push(currentNode.value);

    console.log(print.join("->"));
  }

  appendTo(index, number) {
    if (this.head === null) {
      this.addToFirst(number);
      return;
    }

    let currentPointer = this.head;
    let newNode = new ListNode(number);
    for (let i = 0; i < index - 1; i++) {
      currentPointer = currentPointer.next;
    }

    if (currentPointer.next === null) return;

    newNode.next = currentPointer.next;
    currentPointer.next = newNode;
  }

  deleteFirst() {
    if (this.head === null) return;
    let currentNode = this.head;
    this.head = currentNode.next;
  }

  deleteLast() {
    // if empty return
    if (this.head === null) return;
    let currentNode = this.head;

    // if only present 1 node then also delete which will act as last node
    if (currentNode?.next === null) {
      this.head = null;
      return;
    }

    while (currentNode && currentNode?.next?.next !== null) {
      currentNode = currentNode.next;
    }

    if (currentNode) {
      currentNode.next = null;
    }
  }

  deleteAt(index) {
    if (this.head === null) return;

    if (this.head?.next === null && index === 0) {
      this.head = null;
      return;
    }

    let currentPointer = this.head;
    for (let i = 0; i < index && currentPointer?.next; i++) {
      currentPointer = currentPointer.next;
    }

    if (this.head) {
      this.head.next = currentPointer.next;
    }
  }
}

const list = new LinkedList();
list.addToFirst(5);
list.addToLast(10);
list.addToLast(20);
list.addToLast(30);
list.appendTo(1, 800);
list.display();
list.deleteFirst();
list.deleteLast();
list.deleteAt(1);
list.deleteAt(1);
list.deleteAt(1);
list.deleteAt(1);
list.deleteAt(0);

list.display();
