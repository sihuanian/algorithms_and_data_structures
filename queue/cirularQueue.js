/*
 * @Author: sihuanian
 * @message: 循环队列,会浪费一个空间
 */
class CirularQueue {
  constructor (size) {
    this.size = size + 1
    this.head = 0
    this.tail = 0
    this.queue = []
  }

  dequeue () {
    // 队列为空，不能出队
    if (this.head === this.tail) {
      console.log('这是一个空队列，不能进行出队操作')
      return false
    }
    this.head = (this.head + 1) % this.size
    return this.queue.shift()
  }

  enqueue (element) {
    // 队列满了
    if ((this.tail + 1) % this.size === this.head) {
      console.log('队列已满，不能进行入队操作')
      return false
    }
    this.queue.push(element)
    ++this.tail % this.size
    return true
  }

  display () {
    if (this.head !== this.tail) {
      console.log(this.queue)
    } else {
      console.log('这是一个空队列')
    }
  }
}

let queue = new CirularQueue(3)
// queue.display()
// queue.dequeue()
console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))
console.log(queue.enqueue(4))
queue.display()
console.log(queue.dequeue())
queue.display()