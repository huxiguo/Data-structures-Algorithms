function Queue() {
  // 定义存储队列元素的数组
  let items = []

  // enqueue 向队尾添加新的元素
  this.enqueue = function (element) {
    items.push(element)
  }

  // dequeue 移除队列的第一个元素
  this.dequeue = function () {
    return items.shift()
  }

  // front 返回队首的元素
  this.front = function () {
    return items[0]
  }

  // isEmpty 返回队列是否为空
  this.isEmpty = function () {
    return items.length == 0
  }

  // size 返回队列元素的个数
  this.size = function () {
    return items.length
  }
}

module.exports = Queue