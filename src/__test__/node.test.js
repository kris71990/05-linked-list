'use strict';

const Node = require('../lib/node');

describe('node.js', () => {
  test('node constructor should return value of node', () => {
    const node = new Node('foobar');

    expect(node.value).toEqual('foobar');
    expect(node.next).toBeNull();
  });
});
