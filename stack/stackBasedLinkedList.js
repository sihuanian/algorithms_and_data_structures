class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class StackBasedLinkedList {
  constructor() {
    this.top = null
  }
  push(value) {
    let node = new Node(value)
    if (this.top !== null) {
      node.next = this.top
      this.top = node
    } else {
      this.top = node
    }
  }
  pop() {
    if (this.top !== null) {
      const value = this.top.element
      this.top = this.top.next
      return value
    }
    return -1
  }
  clear() {
    this.top = null
  }
  display() {
    if (this.top !== null) {
      let temp = this.top
      while (temp !== null) {
        console.log(temp.element)
        temp = temp.next
      }
    }
  }
}

let stack = new StackBasedLinkedList()
stack.push(1)
stack.push(2)
stack.push(3)
stack.display()
console.log('')

let res = 0
while(res !== -1) {
  res = stack.pop()
  console.log(res)
}

exports.createStack = StackBasedLinkedList