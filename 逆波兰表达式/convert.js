function convert(exp) {
  let result = '',
    stack = [],
    oper1 = ['+', '-'],
    oper2 = ['*', '/']
  for (let i = 0; i < exp.length; i++) {
    const element = exp[i];
    if (!isNaN(+element)) {
      result += element
    } else if (element === '(') {
      stack.push(element)
    } else if (element === ')') {
      while (stack[stack.length - 1] !== '(') {
        result += stack.pop()
      }
      stack.pop()
    } else if (oper2.includes(element)) {
      stack.push(element)
    } else if (oper1.includes(element)) {
      if (stack.length) {
        while (stack.length !== 0 && stack[stack.length - 1] !== '(') {
          result += stack.pop()
        }
        stack.push(element)
      } else {
        stack.push(element)
      }
    }
    // console.log(result, stack, '=================')
  }
  while (stack.length) {
    result += stack.pop()
  }
  return result
}
// 2*(9+6/3-5)+4转化为后缀表达式 2 9 6 3 / +5 - * 4 +
// const res = convert('2*(9+6/3-5)+4')
// console.log(res)

module.exports = convert
