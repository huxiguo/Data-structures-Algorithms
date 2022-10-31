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

  this.print = function () {
    console.log(items.toString())
  }
}