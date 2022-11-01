const LinkedList = require('./LinkedList')

// test append()
let list = new LinkedList()
list.append(15)
list.append(16)
list.append(17)
list.append(18)
list.append(19)
// console.log(list.showAll())
// console.log(list.size())
// console.log(list.indexof(19))

// console.log(list.removeAt(1))
// console.log(list.showAll())

// console.log(list.remove(18))
// console.log(list.showAll())

// console.log(list.insert(1, 20))
// console.log(list.showAll())

// console.log(list.getHead())
const head = list.getHead()

// 递归输出最后一项
function test(head) {
  if (head.next) {
    head = head.next
    test(head)
  } else {
    console.log(head)
  }
  console.log(1)
}
test(head)
