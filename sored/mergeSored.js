const mergeArr = (left, right) => {
  let leftIndex = 0,
    rightIndex = 0,
    temp = []
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      temp.push(left[leftIndex])
      leftIndex++
    } else {
      temp.push(right[rightIndex])
      rightIndex++
    }
  }
  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const mergeSorted = arr => {
  if (arr.length <= 1) {
    return arr
  }
  // debugger
  // console.log(arr.length / 2)
  let middle = Math.floor(arr.length / 2)
  // console.log(middle)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return mergeArr(mergeSorted(left), mergeSorted(right))
}


// window.mergeSorted = mergeSorted