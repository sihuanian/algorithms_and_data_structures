/*
 * @Author: sihuanian
 * @message: 链式队列的实现
 */
class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class QueueBasedOnLinkedList {
  constructor (size) {
    this.size = size + 1
    this.head = new Node ('head')
    this.tail = this.head
    this.count = 0
  }

  enqueue (element) {
    // 队列满了，不能进行入队操作
    if (this.size === this.count + 1) {
      console.log('队列已满，不能进行入队操作')
      return false
    }
    let newNode = new Node(element)
    this.tail.next = newNode
    this.tail = this.tail.next
    this.count++
    return true
  }

  dequeue () {
    if (this.head.next == null) {
      console.log('这是一个空队列，不能进行出队操作')
      return false
    }
    let ret = this.head.next.element
    this.head = this.head.next
    return ret
  }

  display () {
    let str = []
    let currentNode = this.head
    while (currentNode !== null ) {
      str.push(currentNode.element)
      currentNode = currentNode.next
    }
    str.shift()
    if (str.length > 0) {
      console.log(str.join('->'))
      return
    } 
    console.log('这是一个空队列')
    return
  }
}

let queue = new QueueBasedOnLinkedList(3)
queue.display()
console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))
console.log(queue.enqueue(4))
queue.display()
console.log(queue.dequeue())
queue.display()
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
queue.display()