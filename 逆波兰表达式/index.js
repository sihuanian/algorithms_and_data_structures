const convert = require('./convert')
const cal = require('./计算后辍表达式')

// console.log(cal(convert('2*(9+6/3-5)+4')))

console.log(convert('2*(9+6/3-5)+4'))
const exp = convert('2*(9+6/3-5)+4')
console.log(cal(exp))