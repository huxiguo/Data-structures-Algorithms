const Queue = require('./queue')

// 循环队列 击鼓传花

function hotPotato(nameList, num) {
  let queue = new Queue()
  for (const name of nameList) {
    queue.enqueue(name)
  }
  let eliminated = ''
  while (queue.size() > 1) {
    for (let i = 0; i < num;i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue()
    console.log(`${eliminated}被淘汰`)
  }
  return queue.dequeue()
}

let names = ['a', 'b', 'c', 'd','e']
const winner=hotPotato(names, 30)
console.log(`${winner}胜利了`);