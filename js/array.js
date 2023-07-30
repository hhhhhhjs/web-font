const arr = [1,2,3,4,5]
console.log(arr)

const index = 3 //number
arr[index] = 2  //js中方括号内可以传变量
console.log(arr)

//多维数组
const arr2 = [[1],[2],[3],[4],[5]]

//js中数组不要求数据类型一致
//但是一般情况下，我们不会这么写
//一般情况下，我们会把数据类型一致
//数据类型不一致的数组叫做元组
const arr1 = [1, '2', true, null, undefined, { name: 'aaa' }, [1, 2, 3]]
console.log(arr1)

//可以给任意位置赋值，即使数组长度没有达到
const arr3 = [1]
arr3[100] = 100
console.log(arr3)
