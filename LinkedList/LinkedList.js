function LinkedList() {
  // 要加入列表的项
  let Node = function (element) {
    // 要添加的项
    this.element = element
    // 指向下一个节点的指针
    this.next = null
  }
  // 链表的长度
  let length = 0

  // 链表的第一个节点
  let head = null

  /**
   * 尾部添加新值
   * @param {要添加的元素} element
   * 1、列表为空
   * 2、列表不为空
   */
  this.append = function (element) {
    let node = new Node(element), // 创建Node项
      current // 中间变量

    if (head === null) {
      head = node
    } else {
      current = head
      // 找到最后一项
      while (current.next) {
        current = current.next
      }

      // 找到最后一项，把它的next指向node新结点
      current.next = node
    }
    // 链表长度加一
    length++
  }

  /**
   * 向指定位置插入
   * @param {插入的位置} position
   * @param {插入的元素} element
   */
  this.insert = function (position, element) {
    // 检查越界
    if (position >= 0 && position < length) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0
      // 在头部添加
      if (position === 0) {
        node.next = current
        head = node
      } else {
        // 找到要操作的结点
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      length++
      return true
    } else {
      return false
    }
  }

  /**
   *
   * @param {要删除的元素} element
   */
  this.remove = function (element) {
    let index = this.indexof(element)
    return this.removeAt(index)
  }

  /**
   * 从特定位置移除一项
   * @param {要移除元素的位置} position
   */
  this.removeAt = function (position) {
    // 检查是否越界
    if (position > -1 && position < length) {
      let current = head, // 指向要操作的元素
        previous, // 要操作对象的前一个对象
        index = 0

      // 移除第一项
      if (position === 0) {
        head = current.next
      } else {
        // 找到要操作的结点
        while (index++ < position) {
          previous = current
          current = current.next
        }
        // 将previous于current.next联系，让current移除
        previous.next = current.next
      }

      length--

      return current.element
    }
  }

  /**
   * 返回元素的索引，没有则返回-1
   * @param {元素的值} element
   */
  this.indexof = function (element) {
    let current = head,
      index = 0
    while (current) {
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  /**
   * 判断是否为空
   */
  this.isEmpty = function () {
    return length === 0
  }

  /**
   * 返回元素个数
   */
  this.size = function () {
    return length
  }

  /**
   * 输出元素的值
   */
  this.showAll = function () {
    let current = head,
      arr = []
    while (current) {
      arr.push(current.element)
      current = current.next
    }
    return arr
  }

  /**
   * 返回头结点·
   */
  this.getHead = function () {
    return head
  }
}

module.exports = LinkedList
