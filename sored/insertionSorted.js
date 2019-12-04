/*
 * @Author: sihuanian
 * @message: 插入排序（升序）
 */
/* function insertionSorted(arr) {
  const len = arr.length
  // 未排序区间，默认是数组的第一项到最后一项
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i]
    let j = i - 1
    // 已排序区间默认有数组的第0 项
    for (; j >= 0; j--) {
      // 如果已排序区间的数大于待插入的值，移动位置
      if (arr[j] > value) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = value // 插入值
  }
  return arr
}

const array = [4, 5, 6, 1, 3, 2]
let sortedArr = insertionSorted(array)
console.log(sortedArr) */


function insert (arr) {
  const length = arr.length
  // 未排序区间
  for (let i = 1; i < length; i++ ) {
    const value = arr[i] // 未排序区间的第一项
    // 有序区间 默认数组第一项是有序区间
    let j = i - 1
    for (; j >= 0; j--) {
      if (value < arr[j]) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = value
  }
  return arr
}

const array = [4, 5, 6, 1, 3, 2]
let sortedArr = insert(array)
console.log(sortedArr)