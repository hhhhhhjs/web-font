// set,集合数据类型
// 集合是由一组无序且唯一（即不能重复）的项目组成的
const set = new Set();
set.add(1)
set.add(2)
set.add(2)
set.add(2)
console.log(set)

set.delete(2) //删除集合内选中的元素
set.clear() //清除集合内的所有元素

//可以使用集合的方式来去除数组中重复的元素
const arr = [1,2,2,3,4,5,5]
//请将数组中重复的元素去除
//[1,2,3,4,5]
const arrUniqueSet = new Set(arr) //set中可以放数组
const arrUnique = Array.from(arrUniqueSet) //将集合转换回数组
