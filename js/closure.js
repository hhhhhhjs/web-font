const obj = {
    name: 1
  }
  
  // 此函数执行时一定要有obj，一定要有外部数据（环境）
  function closure() {
    console.log(obj)
  }
  
  const val1 = closure // val1 = function + environment
  const arr = [1, 2, 3, 4, 5, 6]
  const result = []
  for (var i = 0; i < arr.length; i++) {
    const clo = function (i) { return i } // function + env[i]
    
    result.push(clo)
    
    
  }
  console.log(result[2](3))

    