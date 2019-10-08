// 交换数组中的两个的位置
const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// 分区，获取分区之后值为 arr[pivot]的索引
const partition = (arr, pivot, left, right) => {
  let startIndex = left
  const value = arr[pivot]
  for (let i = left; i < right; i++) {
    if (arr[i] < value) {
      swap(arr, startIndex, i)
      startIndex++
    }
  }
  swap(arr, startIndex, pivot)
  return startIndex
}

const quickSorted = (arr, left, right) => {
  if (left < right) {
    let pivot = right
    let partitionIndex = partition(arr, pivot, left, right)
    quickSorted(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1)
    quickSorted(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
  }
}

const arr = []
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100))
}
console.log(arr)
quickSorted(arr, 0, arr.length - 1)
console.log('====================')
console.log(arr)