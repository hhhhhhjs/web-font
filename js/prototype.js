// 原型
// 1.函数是一个对象
// 2.函数可以作为构造函数(constructor)使用

// Array()是一个构造函数，构造器
// const arr = new Array()
// console.log(arr)

function Foo(){
    console.log('hhhh')
}
const f = new Foo()

f.name = 'hj'
f.age = '11'
console.log(f)
console.log(Foo.prototype === f.__proto__)

const arr = []
// Array.prototype.name = function(){
//     console.log('hj')
//     return 1
// }
// console.log(arr.name())

Array.prototype.hello = function() {
    console.log('hello')
    
  }
  
  arr.hello()

  