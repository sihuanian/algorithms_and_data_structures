// 二分查找 value 是否在arr 中
function binary(arr, value) {
  const length = arr.length
  let left = 0,
    right = length - 1
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === value) {
      return mid
    } else if (arr[mid] > value) {
      right = mid - 1
    } else if (arr[mid] < value) {
      left = mid + 1
    } 
  }
  return -1
}

let array = [5, 10, 14, 23, 25, 39, 64, 72, 89, 95]

console.log(binary(array, 25), 'in or not in')
console.log(array.includes(25))


function binarySearch(arr, left = 0, right = arr.length - 1, value) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    console.log(mid)
    if (arr[mid] === value) {
      return mid
    } else if (arr[mid] > value) {
      binarySearch(array, left, mid - 1, value)
    } else if (arr[mid] < value) {
      binarySearch(arr, mid + 1, right, value)
    } 
  }
  return -1
}

binarySearch(array, undefined, undefined, 25)