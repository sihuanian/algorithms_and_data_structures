/*
 * @Author: sihuanian
 * @message: 选择排序 (升序)
 */
function selectionSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    // 第一重循环后面的数据
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j // 找到最小值的下标
      }
    } 
    // 交换
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

const arr = [4, 8, 6, 3, 2, 1, 0, 12]
console.log(selectionSorted(arr))