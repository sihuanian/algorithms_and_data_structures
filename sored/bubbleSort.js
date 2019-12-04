/**
 * @description: 冒泡排序
 * @param Array
 */
function bubbleSort (array) {
  const len = array.length
  if (!Array.isArray(array) || len < 2) {
    return
  }
  for (let i = 0; i < len - 1; i++) {
    let flag = false
    for (let j = 0; j < len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        flag = true 
      }
    }
    if (!flag) {
      break
    }
  }
  return array
}
const test = [4, 5, 6, 3, 2, 1]
// const test = [2]
console.log(bubbleSort(test))