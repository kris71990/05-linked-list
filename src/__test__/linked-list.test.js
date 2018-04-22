'use strict';

const LinkedList = require('../lib/linked-list');

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

    let counter = 0;
    function addNodes() {
      for (let i = 1; i < 4; i++) {
        list.insertAtEnd(i + counter);
      }
      counter += 3;
      return list;
    }

    addNodes();
    expect(list.pop()).toEqual(3);
    addNodes();
    expect(list.pop()).toEqual(6);
    addNodes();
    expect(list.pop()).toEqual(9);
  });

  test('#remove(value)', () => {
    const list = new LinkedList();
    for (let i = 1; i < 10; i++) {
      list.insertAtEnd(i);
    }
    expect(list.remove(2)).toEqual(2);
    expect(list.remove(8)).toEqual(8);
    expect(list.remove(4)).toEqual(4);
  });

  test('#reduce', () => {
    const list = new LinkedList();

    let counter = 0;
    function addNodes() {
      for (let i = 1; i < 4; i++) {
        list.insertAtEnd(i + counter);
      }
      counter += 3;
      return list;
    }
    addNodes();
    expect(list.reduce()).toEqual(6);
    addNodes();
    expect(list.reduce()).toEqual(21);
    addNodes();
    expect(list.reduce()).toEqual(45);
  });
});
