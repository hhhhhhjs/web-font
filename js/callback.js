function platform (){ 
    fn()        //这里的a只是代表一个形参，最终决定是什么要看下面执行platform时传递的参数
  }
  
  const fn = function(){
    console.log('我是一个回调函数')
  }
  
  platform(fn)   
  //这里参数是fn，fn是函数
  