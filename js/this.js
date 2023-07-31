// const obj = {
//    name:'hj',
//    sayHi:function(){
//       console.log(this)
//    }
// }

// console.log(obj.name)
// obj.sayHi()

// const obj2 = {
//    name:'obj2',
//    sayHi:obj.sayHi
// }

// obj2.sayHi()

// const sayHi = obj.sayHi
// sayHi()

function person(name,age){
   this.name = name,
   this.age = age,
   this.getName = function(){
      console.log(this.name)
   }
   this.setName = function(name){
      this.name = name;
   }
}
person.prototype.who = function(){
   console.log(this.name)
}
     

const obj = new person('hj',18)
obj.setName('hhh')
console.log(obj)
obj.who()