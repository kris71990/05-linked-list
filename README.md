# Lab 5 - Linked List

**Author** Kris Sakarias

**Version** 1.0.0

## Overview
This is an implementation of a linked list, which is constructed by creating and inserting nodes in the head or end of the list. Each node has a value and a reference to the next value in the list. The Linked List has insert, remove, pop, and reduce methods.

## Usage 
An instance of the Linked List class can be created by: `const testList = new LinkedList()`. A linked list is instantiated with a head value of null. There are five methods than can be called on the LinkedList class: 
```
insertAtHead(value)
insertAtEnd(value)
pop()
remove(value)
reduce()
```

### testList.insertAtHead(value)
This method takes in any given value and returns the linked list with the value inserted at the head ("front" of Linked List)

`testList.insertAtHead(5)` - inserts a node with a value of five at the front of the list and shifts all other values to the "right"

### testList.insertAtEnd(value)
This method takes in any given value and returns the linked list with the value inserted at the end of the Linked List

`testList.insertAtEnd('tree')` - inserts a node with a string value of 'tree' at the end of the list

### testList.pop()
This method finds the end of list and removes the last node of the list; it also returns the value of the removed node.

`testList.pop()` - removes the last node in the linked list (the node that has a next value of null)

### testList.remove(value)
This method searches the list until it finds the given value, and removes this node from the list; it returns the value of this node.

`testList.remove(5)` - removes the node with the value of 5 from the list

### testList.reduce()
This method moves through the list and reduces the contents of the list to a single value; this value is returned.

`testList.reduce()` - reduces the list to a single value 

## Tests
To run tests:

1. ```git clone https://github.com/kris71990/05-linked-list```
2. ```npm i```
3. ```npm run test```
