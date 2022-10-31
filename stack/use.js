function Stack() {
  // 保存栈里的元素
  let items = []

  // push 添加元素到栈顶
  this.push = function (element) {
    items.push(element)
  }

  // pop 移除栈顶的元素
  this.pop = function () {
    return items.pop()
  }

  // peek 返回栈顶元素
  this.peek = function () {
    return items[items.length - 1]
  }

  // isEmpty 判断是否为空栈
  this.isEmpty = function () {
    return items.length == 0
  }

  // size 返回栈的长度
  this.size = function () {
    return items.length
  }

  // clear 移除所有的元素
  this.clear = function () {
    items = []
  }
}

// 十进制转成2进制
function divideBy2(decNumber) {
  let stack = new Stack(),
    rem,
    binaryString = ''

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2)
    stack.push(rem)
    decNumber = Math.floor(decNumber / 2)
  }
  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString()
  }
  return binaryString
}

// 十进制转成任意进制
function baseConcerter(decNumber, base) {
  let stack = new Stack(),
    rem,
    binaryString = '',
    digits = '0123456789ABCDEF'

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base)
    stack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }
  while (!stack.isEmpty()) {
    binaryString += digits[stack.pop()]
  }
  return binaryString
}
console.log(baseConcerter(100345,16));