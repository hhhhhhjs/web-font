const hashMap = new Map()
hashMap.set('name','hj') //添加key 和 value
hashMap.set('age','18')
hashMap.set('prop',{
    a:1,
    b:2         //对象也可以作为value
})

console.log(hashMap.get('name'))
console.log(hashMap.get('age'))
console.log(hashMap.get('prop'))

console.log(hashMap.has('n')) //这里的方法是用来判断我们构造的哈希表中是否有这个元素，如果有，返回true,否则false

hashMap.delete('name') //删除哈希表中的内容
console.log(hashMap)

//对象
const hashMapObj = {}
hashMapObj.name = 'zhangsan'
hashMap.name
delete hashMapObj.name
console.log(hashMapObj)

//hashmap和object的区别
//hashmap的key可以是任意数据类型
const pojo = {
    name:'测试'
}
hashMap.set(pojo,'aaa')
console.log(hashMap.get(pojo))  //key也可以是对象

