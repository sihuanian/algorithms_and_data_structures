/*
 * @Author: sihuanian
 * @since: 2019-08-22 19:55:35
 * @lastTime: 2019-08-24 16:35:04
 * @message: 单向链表的操作
 */
// 结点
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

// 单向链表的实现
class LinkedList {
  constructor() {
    // 哨兵，单向链表的头结点 data为空的结点，以减少讨论链表是否为空的情况
    this.head = new Node('head')
  }
  // 向链表末尾添加一个结点
  append(newElement) {
    let  currentNode = this.head
    const newNode = new Node(newElement)
    while(currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }
  // 向指定结点后添加结点
  insert(newElement, element) {
    const newNode = new Node(newElement)
    const node = this.findByValue(element)
    if (node === -1) {
      console.log('未找到插入位置')
      return
    }
    newNode.next = node.next
    node.next = newNode
  }
  // 移除指定结点
  remove(item) {
    const preNode = this.findPre(item)
    if (preNode === -1) {
      console.log('未找到给定的元素')
      return
    }
    preNode.next = preNode.next.next
  }
  // 根据值来找到结点
  findByValue(item) {
    let currentNode = this.head
    while(currentNode && currentNode.element !== item) {
      currentNode = currentNode.next
    }
    console.log(currentNode.element)
    return currentNode !== null ? currentNode : -1 
    // let currentNode = this.head.next
    // while (currentNode !== null && currentNode.element !== item) {
    //   currentNode = currentNode.next
    // }
    // console.log(currentNode)
    // return currentNode === null ? -1 : currentNode
  }
  // 查找指定结点的前一个结点
  findPre(item) {
    let currentNode = this.head
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next
    }
    return currentNode.next === null ? -1 : currentNode
  }
  // 根据索引来找到结点,下标从1 开始
  findByIndex(index) {
    let position = 1
    let currentNode = this.head.next
    while (currentNode !== null && position !== index) {
      currentNode = currentNode.next
      position++
    }
    return currentNode === null ? -1 : currentNode
  }
  // 显示链表
  toString() {
   let currentNode = this.head.next
   let listArr = []
   while(currentNode !== null) {
     listArr.push(currentNode.element)
     currentNode = currentNode.next
   }
   console.log(listArr.join(' -> '))
  //  console.log(this.head)
  }
  // 反转单链表
  reverseList() {
    let currentNode = this.head.next
    let root = new Node('head')

    while (currentNode !== null) {
      const next = currentNode.next
      currentNode.next = root.next
      root.next = currentNode
      currentNode = next
    }
    // console.log(this.head)
    // console.log(root)
    this.head = root
  }
  // 环的检测
  checkCircle() {
    let slow = this.head
    let fast = this.head.next

    while(fast !== null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next
      if (fast == slow) {
        return true
      }
    }
    return false
  }
  // 删除倒数第K 个结点
  removeByIndexFromEnd(index) {
    if (this.checkCircle()) {
      console.log('这个链表中存在环，没有倒数第K 个结点。')
      return
    }

    this.reverseList()
    let currentNode = this.head.next
    let pos = 1
    while(pos < index && currentNode !== null) {
      currentNode = currentNode.next
      pos++
    }
    if (currentNode == null) {
      this.reverseList()
      console.log(`没有倒数第${index} 个结点`)
      return
    }
    this.remove(currentNode.element)
    this.reverseList()
  }
}

let linkedList = new LinkedList()
linkedList.append('sihuanian')
linkedList.append('kobe')
// linkedList.findByValue('kobe').next = linkedList.findByValue('sihuanian')

console.log(linkedList.checkCircle(), '=============')
// console.log(linkedList.head)
// console.log(linkedList.findPre('sihuanian'))
// linkedList.reverseList()
// console.log(linkedList.head)
linkedList.removeByIndexFromEnd(1)
linkedList.removeByIndexFromEnd(1)
linkedList.removeByIndexFromEnd(1)
console.log(linkedList)

// linkedList.toString()