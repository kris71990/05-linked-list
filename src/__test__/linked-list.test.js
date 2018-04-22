'use strict';

const LinkedList = require('../lib/linked-list');
const Node = require('../lib/node');

describe('linked list test', () => {
  test('#constructor', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
  });

  // test('#pop', () => {
  //   const list = new LinkedList();
  //   expect(list.)
  // })
});
