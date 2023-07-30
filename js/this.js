// // js中面向对象编程
// // 1.封装(隐藏数据，暴露方法)
// // 2.继承
// // 函数作为构造函数，函数包括属性和方法
// function Person(name,age){
//     // 构造函数中的this指向实例对象
//     this.name = name;
//     this.name = age;
// }

// 在js中this是动态绑定的
// c++/java中this是静态绑定的
 const obj = {
    name:'obj',
    sayHi:function(/**{thisInner:obj} */){
        // 指代当前对象
        // 隐式赋值
        // const this = thisInner
        console.log(this)
    }
 }
 obj.sayHi()

 // 非严格模式下
 // 1.就近原则，谁调用这个函数，this就指向谁
 // 把this理解为函数的隐藏参数，将函数的调用者作为this的值传入
 // 2.构造函数中的this指向示例对象
 // 严格模式下
 // 函数的直接调用，this指向undefined

 const obj2 = {
    name:'obj2',
    sayHi:obj.sayHi
 }

 obj2.sayHi()
 const sayHi = obj.sayHi
 sayHi()
 // sayHi([thisInner = window]) 此时this没有调用者，指向全局




