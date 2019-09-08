/*
 * @Author: sihuanian
 * @message: 顺序队列的实现
 */
class SequentialQueue {
  constructor (size) {
    this.queue = []
    this.head = 0
    this.tail = 0
    this.size = size
  }
  // 入队
  enquene (element) {
    if (this.queue.length === this.size) {
      return false
    }
    this.queue.push(element)
      ++this.tail
    return true
  }
  // 出队
  dequeue () {
    if (this.tail === this.head) {
      return false
    }
    this.queue.shift()
    ++this.head
    return true
  }
  // 显示队列全部元素
  display () {
    if (this.head !== this.tail) {
      console.log(this.queue)
    } else {
      console.log('这是一个空队列')
    }
  }
}

let queue = new SequentialQueue(3)
// console.log(queue.dequeue())
console.log(queue.enquene(1))
console.log(queue.enquene(2))
console.log(queue.enquene(3))
console.log(queue.enquene(4))
queue.display()
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
queue.enquene(5)
queue.display()