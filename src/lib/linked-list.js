'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // Big 0 runtime - O(1)
  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  // Big 0 runtime - O(n)
  insertAtEnd(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  // Big 0 runtime - O(n)
  pop() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    const popped = currentNode.value;
    currentNode = null;
    return popped;
  }

  // Big 0 runtime - O(n)
  remove(value) {
    let currentNode = this.head;

    while (currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    const removed = currentNode.next.value;
    currentNode.next = currentNode.next.next;
    return removed;
  }

  // Big 0 runtime - O(n)
  reduce() {
    let currentNode = this.head;
    let sum = 0;

    while (currentNode.next) {
      sum += currentNode.value;
      currentNode = currentNode.next;
    }
    sum += currentNode.value;
    return sum;
  }
};
