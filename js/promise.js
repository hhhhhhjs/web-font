// const p = new Promise(function(reslove,reject){
//     setTimeout(function(){
//         console.log('执行完成Promise');
//         reslove('要返回的数据可以是人设数据例如接口返回数据');

//     },2000)
// })

// const promiseClick = function(){
//     console.log('点击方法被调用')
//     let p = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log('执行完成Promise');
//             resolve('要返回的数据')
//         },2000)
//     })
//     return p;
// }


function network() {
    // resolve 对应成功的回调，
    // reject 对应失败的回调
    const callback = (resolve, reject) => {
      setTimeout(() => {
        // console.log('hello world')
        // 转换状态，并携带返回值
        // 找到异步函数的回调执行时机，将resolve进行调用
        resolve('hello world')
      }, 3000)
    }
    const pro = new Promise(callback)
    return pro
  }
