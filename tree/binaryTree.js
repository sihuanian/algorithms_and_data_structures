var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

// 先序递归遍历
function preOreder(tree) {
  if (tree) {
    console.log(tree.value)
    preOreder(tree.left)
    preOreder(tree.right)
  }
}

// 先序非递归遍历
function preorder2(tree) {
  const stack = []
  tree && stack.push(tree)
  while (stack.length) {
    const node = stack.pop()
    console.log(node.value)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
}

// 中序非递归
function midOrder(tree) {
  const stack = []
  while (true) {
    while (tree) {
      stack.push(tree)
      tree = tree.left
    }
    if (stack.length === 0) {
      break
    }
    const node = stack.pop()
    console.log(node.value)
    tree = node.right
  }
}

// 后序非递归
function lastOrder(tree) {
  const stack = []
  while (true) {
    while (tree) {
      stack.push(tree)
      tree = tree.left
    }
  }
}


// preOreder(tree)
// preorder2(tree)
// midOrder(tree)

// 广度非递归
function wide(tree) {
  const queue = []
  queue.push(tree)
  while (queue.length) {
    const node = queue.shift()
    console.log(node.value)
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
}

// wide(tree)

// 深度优先非递归
function deep(tree) {
  const stack = []
  stack.push(tree)
  while (stack.length) {
    const node = stack.pop()
    console.log(node.value)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
}

// deep(tree)