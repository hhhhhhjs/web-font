const a = 1; //这里是基础数据类型
// a = 2; //每一个赋值的数据，都需要开辟新的内存空间保存
console.log(a) //但是这里由于是基础数据类型，内存空间不会被更改，所以编译器会报错


//可以通过将其封装成一个对象进而来更改其数据
const b= {
    value:1
}

b.value = 2;

const test = {
    name:1,
    age:2
}

test.name = 'aaa'


//下面这种方法当然会报错
// test = {
//     name:2,
//     age:2
// }
console.log(test)

