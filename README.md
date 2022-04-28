# circular-singly-linked-list

Variant: 0424 % 2 = 0

This application contains implementation of the Circular Singly Linked List.

A circular linked list is a type of linked list in which the first and the last nodes are also connected to each other to form a circle. We traverse a circular singly linked list until we reach the same node where we started. The circular singly liked list has no beginning and no ending. There is no null value present in the next part of any of the nodes.

## Installation
1. You need [NodeJs](https://nodejs.org/) installed for the program to work (app was tested on NodeJs v14.18.1)
```
sudo yum install nodejs
```
2. You need [NPM](https://www.npmjs.com/) installed for the program to work (app was tested with NPM v64.14.15)
```
sudo yum install npm
```
3. Clone the repository to your machine
```
git clone https://github.com/YaroslavEls/circular-singly-linked-list
```
4. Install dependencies by runnig the next command in the project root directory
```
npm install
```
5. To run the app you need to copile typescript code and run a generated javascript file
```
tsc main.ts
node main.js
```
6. To run tests you can type the next command in the project root directory
```
npm test
```

## Usage
Circular Singly Linked List is implemented in the class called List. It consists of the instances of ListNode class. Each ListNode has 'Value' and 'Next' fields.
* Value - information stored in node
* Next - link to the next element of the list

List class has 12 methods:
1. **List.length()**
<br>returns amount of the elements in the list
2. **List.append(value: string)**
<br>adds an element with the specified value to the end of the list
3. **List.insert(value: string, index: number)**
<br>adds an element with the specified value to the specified position in the list
4. **List.delete(index: number)**
<br>deletes the element on the specified position in the list
5. **List.deleteAll(value: string)**
<br>deletes all elements with specified value in the list
6. **List.get(index: number)**
<br>returns the value of the element on the specified position in the list
7. **List.clone()**
<br>returns the copy of the list
8. **List.reverse()**
<br>changes the position of elements in the list to reverse
9. **List.findFirst(value: string)**
<br>finds the first element with the specified value in the list
10. **List.findLast(value: string)**
<br>finds the last element with the specified value in the list
11. **List.clear()**
<br>delets all elements from the list
12. **List.extend(list: List)**
<br>adds all elements from the specified list to the current one

<br><br>

### [Commit with failed tests in CI GitHub Actions](https://github.com/YaroslavEls/circular-singly-linked-list/runs/6215552307?check_suite_focus=true)