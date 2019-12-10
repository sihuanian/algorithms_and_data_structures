// 后缀表达式3 4 + 5 × 6 -的计算
function cal(exp) {
  let stack = [] // 只能使用push(入栈) pop(出栈)
  for (let i = 0; i < exp.length; i++) {
    const element = exp[i];
    if (!isNaN(element * 1)) {
      // console.log(element * 1)
      stack.push(element * 1)
    } else {
      const res = count(element, stack.pop(), stack.pop())
      // console.log(res)
      stack.push(res)
    }
  }
  return stack[0]
}

function count(opera, num1, num2) {
  switch (opera) {
    case '+':
      return num2 + num1
    case '-':
      return num2 - num1
    case '*':
      return num2 * num1
    case '/':
      return num2 / num1
    default:
      break;
  }
}

// const result = cal('2963/+5-*4+')
// console.log(result)
module.exports = cal
