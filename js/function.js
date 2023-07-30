// const fn = function(){
//     console.log('hello')
//     return 1
// }

// const comment = fn
// comment()


// const fn = function(){
//     console.log('test');
//     const result = function(){
//         console.log('hello')
//         return 1
//     }
//     return result()
// }

// const comment = fn;
// console.log(comment())



//回调函数（和api没有任何关系，和异步没有任何关系）
//函数作为参数传递给另一个函数


//platform平台api
//我们自己传递的函数


function platform(fn){
    fn(1,2,3)
}


const fn = function (a,b,c){
    console(a,b,c)
}

const params = {fn}
platform(params)

