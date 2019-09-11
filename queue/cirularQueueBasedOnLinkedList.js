class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class CirularQueueBasedOnLinkedList {
  constructor (size) {
    this.size = this.size
    this.count = 0
    this.head = null
    this.tail = null
  }

  enqueue (element) {
    let node = new Node(element)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else if (this.tail.next !== this.head) {
      this.tail.next = node
      this.tail = this.tail.next
    }
  }
}

let queue = new CirularQueueBasedOnLinkedList(3)
console.log(queue.enqueue(1))
