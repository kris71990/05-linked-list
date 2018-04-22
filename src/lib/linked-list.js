'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // insertAtHead(value) {
  //   const node = new Node(value);

  //   node.next = this.head;
  //   this.head = node;
  //   return this;
  // }

  // insertAtEnd(value) {
  //   const node = new Node(value);

  //   if (!this.head) {
  //     this.head = node;
  //     return this;
  //   }

  //   let currentNode = this.head;
  //   while (currentNode.next) {
  //     currentNode = currentNode.next;
  //   }
  //   currentNode.next = node;
  //   return this;
  // }

  pop() {
    // const node = new Node(value);

    if (!this.head) {
      return this;
    } 

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    return this;
  }
};