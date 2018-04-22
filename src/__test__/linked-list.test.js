'use strict';

const LinkedList = require('../lib/linked-list');
const Node = require('../lib/node');

describe('linked list test', () => {
  test('#constructor', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
  });

  test('#insertAtHead', () => {
    const testList = new LinkedList();
    testList.insertAtHead(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtHead(6);
    expect(testList.head.value).toEqual(6);
    expect(testList.head.next.value).toEqual(5);

    testList.insertAtHead(7);
    expect(testList.head.value).toEqual(7);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(5);
  });

  test('#insertAtEnd', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(1);
    testList.insertAtEnd(2);
    testList.insertAtEnd(3);
    testList.insertAtEnd(4);
    expect(testList.head.value).toEqual(1);
    expect(testList.head.next.value).toEqual(2);
    expect(testList.head.next.next.next.value).toEqual(4);
  });

  test('#pop', () => {
    const list = new LinkedList();
    list.insertAtEnd(1);
    list.insertAtEnd(2);
    list.insertAtEnd(3);
    expect(list.pop()).toEqual(3);
  });

  test('#remove value', () => {
    const list = new LinkedList();
    list.insertAtHead(3);
    list.insertAtHead(2);
    list.insertAtHead(1);
    expect(list.remove(2)).toEqual(2);
  });

  test('#map or reduce', () => {
    const list = new LinkedList();
    list.insertAtHead(3);
    list.insertAtHead(2);
    list.insertAtHead(1);
    expect(list.reduce()).toEqual(6);
  });
});
