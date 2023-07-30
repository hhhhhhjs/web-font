// 1.

// const str1 = '1234'
// console.log(str1[1])

// 2.concat //数组也有  拼接字符串

const str2 = '1234'
const str21 = '4567'
const str22 = str2.concat(str21)
console.log(str22)
const str23 = `${str21}/${str2}`  //功能相同
console.log(str23)

// 3.endsWith   判断是否以指定的字符串结尾，是返回true,否则false;
str21.endsWith('4')
str21[str21.length - 1] === '4'
console.log(str21.endsWith('4'))

// 4.includes  在字符串中寻找是否有另一个字符串，如果有返回true，否则false
const str = 'hello good girl'
console.log(str.includes('d g'))
// 5.indexOf  找字符串相应的索引，如果没有则返回-1
const str3 = 'hello world'
console.log(str3.indexOf(''))

// 6. 
const str4 = 'The quick brown is very good.'
const str4result = str4.split('')
console.log(str4result)
