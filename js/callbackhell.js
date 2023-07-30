// //回调地狱
// function network(url,fn){
//     //请求url,通过fn返回url结果
//     fn({ data:url })
// }

function platform(a,params) {
   
    console.log(params)
    a({name:'hj'})
}

const fn = function(params) {
    console.log(params)
}

platform(fn,2)
// function platform(){
//     test()
// }

// function test(){
//     console.log('hhh')
// }

// platform()
